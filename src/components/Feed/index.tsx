import { PostCard } from "./PostCard";
import { StyledFeed } from "./StyledFeed";

export function Feed() {
  return (
    <StyledFeed>
      <div className="text__input-area">
        <textarea
          name=""
          id=""
          placeholder="O que você está pensando agora?"
        ></textarea>
        <button>Postar</button>
      </div>
      <div>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </StyledFeed>
  );
}
