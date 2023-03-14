import { useContext } from "react";
import { PostContext } from "../../../providers/PostContext/PostContext";
import { StyledModalDeletePost } from "./StyleModalDeletePost";

export const ModalDeletePost = () => {
  const { setDeletePost, deletePostId, postRemove } = useContext(PostContext);

  return (
    <div>
      <StyledModalDeletePost>
        <div className="modal__container">
          <header>
            <h1>Deletar Post</h1>
            <button
              onClick={() => {
                setDeletePost(false);
              }}
            >
              X
            </button>
          </header>
          <div>
            <p>Desejar realmente excluir o post?</p>
            <button
              onClick={() => {
                console.log(deletePostId);
                postRemove(deletePostId);
              }}
            >
              Confirmar
            </button>
          </div>
        </div>
      </StyledModalDeletePost>
    </div>
  );
};
