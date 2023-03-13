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
      setPostList([...postList, response.data.message]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // const postEdit = async (formData: IEditPostFormValues) => {
  //   try {
  //     setLoading(true);
  //     const response = await api.patch("addPath", formData);

  //     const newPostsList = postList.map((post) => {
  //       if (formData.id === post.id) {
  //         return { ...post, ...formData };
  //       } else {
  //         return post;
  //       }
  //     });
  //     setPostList(newPostsList);
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const postRemove = async (id: IRemovePostFormValues) => {
  //   try {
  //     // const response = await api.delete(`addPath`, id.id)

  //     const newPosts = postList.filter((post) => post.id !== id.id);
  //     setPostList(newPosts);
  //   } catch (error) {}
  // };

  return (
    <PostContext.Provider
      value={{ postCreate, postList, postLoad, deletePost, setDeletePost }}
    >
      {children}
    </PostContext.Provider>
  );
};
