import styled from "styled-components";

export const StyledFeed = styled.section`
  width: 100%;
  padding: 20px;
  border-radius: 16px;
  background-color: var(--grey-3);
  .texField {
    width: 100%;
    color: white;
    margin: 0 auto;
    padding: 15px;
  }
  .text__input-area {
    display: flex;
    flex-direction: column;
    div {
      display: flex;
      align-items: center;
      width: 50%;
      img {
        width: 45px;
        border-radius: 30px;
      }
    }
    button {
      align-self: flex-end;

      padding: 5px 25px;
      border: 1px solid var(--grey-1);
      border-radius: 4px;

      color: var(--grey-1);
      font-size: 14px;
    }
    button:hover {
      color: var(--grey-0);
    }
  }
`;
