export interface IPostContext {
  postCreate: (formData: ICreatePostFormValues) => Promise<void>;
  // postEdit: (formData: IEditPostFormValues) => Promise<void>;
  postRemove: (id: IRemovePostFormValues) => Promise<void>;
  postList: IPostValue[];
  postLoad: () => Promise<void>;
  setDeletePost: React.Dispatch<React.SetStateAction<boolean>>;
  deletePost: boolean;
  setDeletePostId: React.Dispatch<React.SetStateAction<Number | undefined>>;
  deletePostId: Number | undefined;
}

export interface IPostValue {
  message: string;
  id: number;
  userId: number;
  date: string;
}

export interface IDefaultProviderProps {
  children: React.ReactNode;
}

interface ICreatePostData {
  message: string;
  userId: string | null;
  date: string;
}

export interface ICreatePostFormValues {
  data: ICreatePostData;
}

export interface IEditPostFormValues {
  postText: string;
  id: string;
}

export interface IRemovePostFormValues {
  id: number | undefined;
}
