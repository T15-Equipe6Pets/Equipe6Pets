export interface IPostContext {
  lostPetCreate: (formData: ICreateLostPetFormValues) => Promise<void>;
  lostPetList: ILostPetValue[];

  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ILostPetValue {
  name: string;
  city: string;
  phone: string;
  userId: number;
  id: number;
  image: string;
}

export interface IDefaultProviderProps {
  children: React.ReactNode;
}

export interface ICreateLostPetFormValues {
  name: string;
  city: string;
  phone: string;
  image: string;
}

export interface IEditLostPetFormValues {
  postText: string;
  id: string;
}

export interface IRemoveLostPetFormValues {
  id: string;
}
