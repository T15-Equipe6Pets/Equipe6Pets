export interface IPostContext {
    postCreate: (formData: ICreatePostFormValues) => Promise<void>
    postEdit: (formData: IEditPostFormValues) => Promise<void>
    postRemove: (id: IRemovePostFormValues) => Promise<void>
}

export interface IPostValue {
    postText: string;
    id: string
}

export interface IDefaultProviderProps {
    children: React.ReactNode;
}

export interface ICreatePostFormValues {
    postText: string;
    id: string
}

export interface IEditPostFormValues {
    postText: string;
    id: string
}

export interface IRemovePostFormValues {
    id: string
}