import { createContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import {
  ICreateLostPetFormValues,
  IDefaultProviderProps,
  IEditLostPetFormValues,
  ILostPetValue,
  IPostContext,
  IRemoveLostPetFormValues,
} from "./@type";

export const LostPetContext = createContext({} as IPostContext);

export const LostPetProvider = ({ children }: IDefaultProviderProps) => {
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [lostPetList, setLostPetList] = useState<ILostPetValue[]>([]);
  useEffect(() => {
    loadPetList();
  }, []);

  async function loadPetList() {
    try {
      const response = await api.get("/pets");
      setLostPetList(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  const lostPetCreate = async (formData: ICreateLostPetFormValues) => {
    const token = localStorage.getItem("@TOKEN");
    const userId = localStorage.getItem("@id");
    try {
      console.log({ ...formData, userId });
      setLoading(true);
      const response = await api.post(
        "/pets",
        { ...formData, userId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setLostPetList([...lostPetList, response.data.user]);
      setModal(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // const lostPetEdit = async (formData: IEditLostPetFormValues) => {
  //   try {
  //     setLoading(true);
  //     const response = await api.patch("/pets", formData);

  //     const newLostPet = lostPetList.map((lostPet) => {
  //       if (formData.id === lostPet.id) {
  //         return { ...lostPet, ...formData };
  //       } else {
  //         return lostPet;
  //       }
  //     });
  //     setLostPetList(newLostPet);
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const lostPetRemove = async (id: IRemoveLostPetFormValues) => {
  //   try {
  //     //   const response = await api.delete(`addPath`, id.id)

  //     const newPosts = lostPetList.filter((lostPet) => lostPet.id !== id.id);
  //     setLostPetList(newPosts);
  //   } catch (error) {}
  // };

  return (
    <LostPetContext.Provider
      value={{ lostPetCreate, modal, setModal, lostPetList }}
    >
      {children}
    </LostPetContext.Provider>
  );
};
