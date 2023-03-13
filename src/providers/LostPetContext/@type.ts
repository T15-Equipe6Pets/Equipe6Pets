export interface IPostContext {
  lostPetCreate: (formData: ICreateLostPetFormValues) => Promise<void>;
  lostPetList: ILostPetValue[];
  modalInfo: boolean;
  setModalInfo: React.Dispatch<React.SetStateAction<boolean>>;
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  petId: number;
  setPetId: React.Dispatch<React.SetStateAction<number>>;
  lostPetRemove: (id: string) => Promise<void>;
  petName: string;
  setPetName: React.Dispatch<React.SetStateAction<string>>;
  petCity: string;
  setPetCity: React.Dispatch<React.SetStateAction<string>>;
  petPhone: string;
  setPetPhone: React.Dispatch<React.SetStateAction<string>>;
  lostPetEdit: (formData: IEditLostPetFormValues) => Promise<void>;
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
  race: string;
  sex: string;
}

export interface IEditLostPetFormValues {
  name: string;
  city: string;
  phone: string;
}

export interface IRemoveLostPetFormValues {
  petId: number | string;
}
