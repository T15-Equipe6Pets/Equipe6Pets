import { createContext, useState } from "react";
import { api } from "../../services/api";
import { ICreateLostPetFormValues, IDefaultProviderProps, IEditLostPetFormValues, ILostPetValue, IPostContext, IRemoveLostPetFormValues } from "./@type";

export const LostPetContext = createContext({} as IPostContext);

export const LostPetProvider = ({ children }: IDefaultProviderProps) => {
  const [loading, setLoading] = useState(false);
  const [lostPetList, setLostPetList] = useState<ILostPetValue[]>([]);

  const lostPetCreate = async (formData: ICreateLostPetFormValues) => {
    try {
      setLoading(true);
      const response = await api.post("addPath", formData);
      setLostPetList([...lostPetList, response.data.user]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const lostPetEdit = async (formData: IEditLostPetFormValues) => {
    try {
      setLoading(true);
      const response = await api.patch("addPath", formData);

      const newLostPet = lostPetList.map((lostPet) => {
        if (formData.id === lostPet.id) {
          return { ...lostPet, ...formData };
        } else {
          return lostPet;
        }
      });
      setLostPetList(newLostPet);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const lostPetRemove = async (id: IRemoveLostPetFormValues) => {
    try {
    //   const response = await api.delete(`addPath`, id.id)

      const newPosts = lostPetList.filter(lostPet => lostPet.id !== id.id);
      setLostPetList(newPosts);
    } catch (error) {
    }
  }

  return (
    <LostPetContext.Provider value={{ lostPetCreate, lostPetEdit, lostPetRemove }}>
      {children}
    </LostPetContext.Provider>
  );
};
