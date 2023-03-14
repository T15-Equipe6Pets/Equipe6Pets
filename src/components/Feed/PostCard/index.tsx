import { StyledPostCard } from "./StyledPostCard";
import PostOptions from "../../../assets/PostOptions.svg";
import { useContext } from "react";
import { PostContext } from "../../../providers/PostContext/PostContext";

interface iPostCardPros {
  message: string;
  id: number;
}

export function PostCard({ message, id }: iPostCardPros) {
  const { setDeletePost, setDeletePostId } = useContext(PostContext);

  return (
    <StyledPostCard>
      <div className="user__container">
        <div className="user__identity">
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            alt=""
          />
          <div>
            <h3>Nome</h3>
            <span>•</span>
            <span>data</span>
          </div>
        </div>
        <div className="user__options">
          <button
            onClick={() => {
              setDeletePost(true);
              setDeletePostId(id);
            }}
          >
            <img src={PostOptions} />
          </button>
        </div>
      </div>
      <h2>{message}</h2>
    </StyledPostCard>
  );
}
