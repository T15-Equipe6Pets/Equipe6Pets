export interface IPostContext {
  postCreate: (formData: ICreatePostFormValues) => Promise<void>;
  // postEdit: (formData: IEditPostFormValues) => Promise<void>;
  // postRemove: (id: IRemovePostFormValues) => Promise<void>;
  postList: IPostValue[];
  postLoad: () => Promise<void>;
}

export interface IPostValue {
  postText: string;
  id: number;
}

export interface IDefaultProviderProps {
  children: React.ReactNode;
}

export interface ICreatePostFormValues {
  message: string;
  userId: number;
}

export interface IEditPostFormValues {
  postText: string;
  id: string;
}

export interface IRemovePostFormValues {
  id: string;
}
