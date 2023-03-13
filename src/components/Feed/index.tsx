import { useContext, useEffect } from "react";
import { PostContext } from "../../providers/PostContext/PostContext";
// COMPONENTS
import { PostCard } from "./PostCard";
import { StyledFeed } from "./StyledFeed";

export function Feed() {
  const { postCreate, postList, postLoad } = useContext(PostContext);

  useEffect(() => {
    postLoad();
  }, []);

  return (
    <StyledFeed>
      <div className="text__input-area">
        <textarea placeholder="O que você está pensando agora?"></textarea>
        <button
          onClick={() => {
            postCreate({ message: "Teste", userId: 1 });
          }}
        >
          Postar
        </button>
      </div>
      <div>
        {postList.map((element) => (
          <PostCard />
        ))}
      </div>
    </StyledFeed>
  );
}
