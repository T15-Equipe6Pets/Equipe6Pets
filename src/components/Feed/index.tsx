import { StyledFeed } from "./StyledFeed";

export function Feed() {
  return (
    <StyledFeed>
      <div>
        <textarea
          name=""
          id=""
          placeholder="O que você está pensando agora?"
        ></textarea>
        <button>Postar</button>
      </div>
    </StyledFeed>
  );
}
