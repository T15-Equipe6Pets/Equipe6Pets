import styled from "styled-components";

export const StyledFeed = styled.section`
  width: 100%;
  padding: 20px;
  background-color: var(--grey-3);

  .text__input-area {
    max-height: 50px;
    margin-bottom: 50px;

    display: flex;
    justify-content: space-between;
    textarea {
      max-width: 700px;
      width: 90%;
      padding: 10px 0 0 10px;

      resize: none;

      outline: none;
      font-family: "Inter";

      background-color: var(--grey-2);
      color: var(--grey-1);

      border: 1px solid var(--grey-2);
      border-radius: 4px;
    }
    textarea:focus {
      border: 1px solid var(--grey-0);
      color: var(--grey-0);
    }
    button {
      width: 60px;

      font-family: "Inter";
      font-weight: 600;

      color: var(--grey-0);
      background-color: var(--color-primary);
      border-radius: 4px;
    }
    button:hover {
      background-color: var(--color-primary-focus);
    }
  }
`;
