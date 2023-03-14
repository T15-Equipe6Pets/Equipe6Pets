import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { PostContext } from "../../providers/PostContext/PostContext";
import { ITextPost } from "../../providers/UserContext/@types";
import { api } from "../../services/api";
import { InputText } from "../Input";
import { ModalDeletePost } from "../Modal/ModalDeletePost";
// COMPONENTS
import { PostCard } from "./PostCard";
import { StyledFeed } from "./StyledFeed";

interface iSubmit {
  text: string;
}

export function Feed() {
  const { postCreate, postList, postLoad } = useContext(PostContext);
  const [userphoto, setUserPhoto] = useState<string | undefined>();

  useEffect(() => {
    postLoad();
    getUser();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ITextPost>();

  const submit = (formData: iSubmit) => {
    const userId = localStorage.getItem("@id");
    const date = new Date().toLocaleDateString();

    const data = { message: formData.text, userId: userId, date };
    postCreate(data);
  };

  const getUser = async () => {
    const userId = localStorage.getItem("@id");
    try {
      const response = await api.get(`/users/${userId}`);
      setUserPhoto(response.data.image);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledFeed>
      <form onSubmit={handleSubmit(submit)} className="text__input-area">
        <div className="field_Container">
          <img src={userphoto} />
          <InputText register={register("text")} />
        </div>
        <button type="submit">Post</button>
      </form>
      <div className="cards_Container">
        {postList.map((post) => (
          <PostCard
            id={post.id}
            key={post.id}
            message={post.message}
            userId={post.userId}
            date={post.date}
          />
        ))}
      </div>
    </StyledFeed>
  );
}
