export interface IPostContext {
    lostPetCreate: (formData: ICreateLostPetFormValues) => Promise<void>
    lostPetEdit: (formData: IEditLostPetFormValues) => Promise<void>
    lostPetRemove: (id: IRemoveLostPetFormValues) => Promise<void>
}

export interface ILostPetValue {
    postText: string;
    id: string
}

export interface IDefaultProviderProps {
    children: React.ReactNode;
}

export interface ICreateLostPetFormValues {
    postText: string;
    id: string
}

export interface IEditLostPetFormValues {
    postText: string;
    id: string
}

export interface IRemoveLostPetFormValues {
    id: string
}