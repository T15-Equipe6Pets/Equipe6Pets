import styled from "styled-components";

export const StyledHeader = styled.header`
  overflow: hidden;

  .header__container {
    width: 100%;
    max-width: 1650px;
    padding: 10px 30px;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      color: var(--color-primary);
      font-size: 20px;

      cursor: default;
    }
    .icon__group {
      display: flex;
      flex-direction: column;
      align-items: center;

      background-color: transparent;

      cursor: pointer;
      .icon__up {
        width: 25px;
      }
      .icon__down {
        width: 10px;
      }
    }
    .icon__group:hover {
      background-color: transparent;
    }
    button {
      width: 60px;
      height: 30px;

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
