import { StyledPostCard } from "./StyledPostCard";

interface iPostCardPros {
  message: string;
}

export function PostCard({ message }: iPostCardPros) {
  return (
    <StyledPostCard>
      <div>
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
      <h2>{message}</h2>
    </StyledPostCard>
  );
}
