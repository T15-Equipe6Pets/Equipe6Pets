import styled from "styled-components";

export const StyledModalDeletePost = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(51, 51, 51, 0.5);
  .modal__container {
    background-color: var(--grey-2);
    border-radius: 4px;
    header {
      padding: 10px;

      display: flex;
      align-items: center;
      justify-content: space-between;
      h1 {
        font-size: 20px;
        font-family: "Inter";
        color: var(--grey-0);
      }
      button {
        font-family: "Inter";
        font-size: 18px;
        color: var(--grey-0);
      }
    }
    div {
      padding: 20px;

      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      background-color: var(--grey-3);
      p {
        font-family: "Inter";
        color: var(--grey-0);

        margin-bottom: 20px;
      }
      button {
        font-family: "Inter";
        color: var(--grey-0);
        height: 38px;
        width: 90%;
        background-color: var(--color-primary);
        color: var(--white-neutral);
        margin: 0 auto;
        border: none;
        border-radius: 4px;
        :hover {
          background-color: var(--color-primary-focus);
          color: var(--white-neutral);
        }
      }
    }
  }
`;
