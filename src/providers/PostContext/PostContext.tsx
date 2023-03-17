import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import {
  IPostContext,
  IDefaultProviderProps,
  IPostValue,
  ICreatePostFormValues,
  IEditPostFormValues,
  IRemovePostFormValues,
} from "./@types";

export const PostContext = createContext({} as IPostContext);

export const PostProvider = ({ children }: IDefaultProviderProps) => {
  const [loading, setLoading] = useState(false);
  const [postList, setPostList] = useState<IPostValue[]>([]);
  const [deletePost, setDeletePost] = useState(false);
  const [deletePostId, setDeletePostId] = useState<Number>(0);

  const postLoad = async () => {
    try {
      const response = await api.get("/posts");
      setPostList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const postCreate = async (formData: ICreatePostFormValues) => {
    const token = localStorage.getItem("@TOKEN");
    try {
      setLoading(true);
      const response = await api.post("/posts", formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setPostList([...postList, response.data]);
      toast.success("Você criou um post com sucesso!");
    } catch (error) {
      console.log(error);
      toast.error("Erro! Você não conseguiu criar um post");
    } finally {
      setLoading(false);
    }
  };

  const postRemove = async (id: IRemovePostFormValues) => {
    const token = localStorage.getItem("@TOKEN");
    try {
      const response = await api.delete(`/posts/${id.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const newPosts = postList.filter((post) => post.id !== id.id);
      setDeletePost(false);
      setPostList(newPosts);
      toast.success("Você removeu seu post com sucesso!");
    } catch (error) {
      toast.error("Erro! Você não conseguiu apagar seu post");
      // console.log(error);
    }
  };

  return (
    <PostContext.Provider
      value={{
        postCreate,
        postList,
        postLoad,
        deletePost,
        setDeletePost,
        deletePostId,
        setDeletePostId,
        postRemove,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
