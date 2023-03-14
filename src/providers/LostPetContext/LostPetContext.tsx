import { createContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { toast } from "react-toastify";
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
  const [modalInfo, setModalInfo] = useState(false);
  const [petId, setPetId] = useState(1);
  const [petName, setPetName] = useState("");
  const [petCity, setPetCity] = useState("");
  const [petPhone, setPetPhone] = useState("");
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
      window.location.reload();
      toast.success("Pet registrado com sucesso!");
    } catch (error) {
      console.log(error);
      toast.error("Algo deu errado!");
    } finally {
      setLoading(false);
    }
  };

  const lostPetEdit = async (formData: IEditLostPetFormValues) => {
    const token = localStorage.getItem("@TOKEN");
    try {
      const response = await api.patch(`/pets/${petId}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      loadPetList();
      toast.success("Dados alterados!");
    } catch (error) {
      console.log(error);
      toast.error("Algo deu errado!");
    } finally {
      setLoading(false);
    }
  };

  const lostPetRemove = async (id: string) => {
    const token = localStorage.getItem("@TOKEN");
    try {
      const response = await api.delete(`/pets/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      loadPetList();
      toast.success("Pet deletado!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LostPetContext.Provider
      value={{
        lostPetCreate,
        modal,
        setModal,
        lostPetList,
        modalInfo,
        setModalInfo,
        petId,
        setPetId,
        lostPetRemove,
        petCity,
        petName,
        petPhone,
        setPetCity,
        setPetName,
        setPetPhone,
        lostPetEdit,
      }}
    >
      {children}
    </LostPetContext.Provider>
  );
};
