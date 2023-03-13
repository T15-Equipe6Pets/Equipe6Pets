import styled from "styled-components";

export const StyledAside = styled.aside`
  border-radius: 16px;
  padding: 20px;
  max-height: 80vh;
  min-height: 80vh;

  overflow-y: auto;

  background-color: var(--grey-3);
  .pet-card__title {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 20px;

    h1 {
      color: var(--white-neutral);
    }
    button {
      img {
        width: 30px;
      }
    }
  }
  .pet-card__container {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;
