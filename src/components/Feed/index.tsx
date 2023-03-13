import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { PostContext } from "../../providers/PostContext/PostContext";
import { ITextPost } from "../../providers/UserContext/@types";
import { InputText } from "../Input";
// COMPONENTS
import { PostCard } from "./PostCard";
import { StyledFeed } from "./StyledFeed";

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

  const submit = (formData: any) => {
    console.log(formData);
  };

  return (
    <StyledFeed>
      <form onSubmit={handleSubmit(submit)} className="text__input-area">
        <InputText register={register("text")} />
        <button type="submit">Postar</button>
      </form>
      <div>
        {postList.map((element) => (
          <PostCard />
        ))}
      </div>
    </StyledFeed>
  );
}
