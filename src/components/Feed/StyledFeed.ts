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
  img {
    width: 45px;
    border-radius: 30px;
  }
  .field_Container {
    display: flex;
    gap: 20px;
    align-items: center;
  }
  fieldset {
    width: 100%;
    margin-bottom: 10px;
  }

  .text__input-area {
    display: flex;
    flex-direction: column;
    .cards_Container {
      display: flex;
      align-items: center;
      width: 50%;
    }
    button {
      align-self: flex-end;

      padding: 5px 25px;
      border: 1px solid var(--grey-1);
      border-radius: 4px;

      color: var(--grey-1);
      font-size: 14px;

      margin-bottom: 30px;
    }
    button:hover {
      color: var(--grey-0);
    }
  }
`;
