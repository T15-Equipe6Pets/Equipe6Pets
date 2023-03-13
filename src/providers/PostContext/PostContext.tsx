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

  const postCreate = async (formData: ICreatePostFormValues) => {
    try {
      setLoading(true);
      const response = await api.post("addPath", formData);
      setPostList([...postList, response.data.user]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const postEdit = async (formData: IEditPostFormValues) => {
    try {
      setLoading(true);
      const response = await api.patch("addPath", formData);

      const newPostsList = postList.map((post) => {
        if (formData.id === post.id) {
          return { ...post, ...formData };
        } else {
          return post;
        }
      });
      setPostList(newPostsList);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const postRemove = async (id: IRemovePostFormValues) => {
    try {
      // const response = await api.delete(`addPath`, id.id)

      const newPosts = postList.filter(post => post.id !== id.id);
      setPostList(newPosts);
    } catch (error) {
    }
  }

  return (
    <PostContext.Provider value={{ postCreate, postEdit, postRemove }}>
      {children}
    </PostContext.Provider>
  );
};
