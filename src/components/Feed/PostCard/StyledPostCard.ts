import styled from "styled-components";

export const StyledPostCard = styled.div`
  margin-bottom: 20px;

  display: flex;
  flex-direction: column;
  gap: 22px;

  color: var(--white-neutral);
  font-family: "Inter";
  font-weight: lighter;
  div {
    display: flex;
    align-items: center;
    gap: 20px;
    img {
      width: 45px;
      border-radius: 30px;
    }
    div {
      display: flex;
      gap: 12px;
      span {
        color: var(--grey-1);
      }
    }
  }
`;
