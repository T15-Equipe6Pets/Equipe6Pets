import styled from "styled-components";

export const StyledHeader = styled.header`
  overflow: hidden;

  div {
    width: 100%;
    max-width: 1650px;
    padding: 10px 30px;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    h1 {
      color: var(--color-primary);

      cursor: default;
    }
    button {
      width: 60px;

      font-family: "Inter";
      font-weight: 600;

      color: var(--grey-0);
      background-color: var(--grey-3);
      border-radius: 4px;
    }
    button:hover {
      background-color: var(--grey-2);
    }
  }
  hr {
    color: var(--grey-3);
  }
`;
