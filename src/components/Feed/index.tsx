import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { PostContext } from "../../providers/PostContext/PostContext";
import { ITextPost } from "../../providers/UserContext/@types";
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

  useEffect(() => {
    postLoad();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ITextPost>();

  const submit = (formData: iSubmit) => {
    const userId = parseInt(localStorage.getItem("@id"));
    const data = { message: formData.text, userId: userId };
    postCreate(data);
  };

  return (
    <StyledFeed>
      <form onSubmit={handleSubmit(submit)} className="text__input-area">
        <InputText register={register("text")} />
        <button type="submit">Postar</button>
      </form>
      <div>
        {postList.map((post) => (
          <PostCard id={post.id} key={post.id} message={post.message} />
        ))}
      </div>
    </StyledFeed>
  );
}
