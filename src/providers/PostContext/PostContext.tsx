import { createContext, useState } from "react";
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
  const [deletePostId, setDeletePostId] = useState<Number>();

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
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const postRemove = async (id: IRemovePostFormValues) => {
    const token = localStorage.getItem("@TOKEN");
    try {
      const response = await api.delete(`/posts/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const newPosts = postList.filter((post) => post.id !== id);
      setDeletePost(false);
      setPostList(newPosts);
    } catch (error) {
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
