import { StyledPostCard } from "./StyledPostCard";

export function PostCard() {
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
      <h2>Conteúdo</h2>
    </StyledPostCard>
  );
}
