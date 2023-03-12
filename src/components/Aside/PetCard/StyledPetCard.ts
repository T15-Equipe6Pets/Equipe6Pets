import styled from "styled-components";

export const StyledPetCard = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;

  color: var(--white-neutral);
  img {
    width: 50px;
    height: 50px;
  }
  div {
    display: flex;
    flex-direction: column;
    span {
      font-size: 12px;
    }
  }
`;
