import styled from "styled-components";

export const StyledHome = styled.div`
  main {
    width: 100%;
    max-width: 1650px;
    padding: 10px 30px;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    gap: 20px;
    aside {
      top: 20px;
      position: sticky;
    }
  }
  @media (max-width: 550px) {
    main {
      flex-direction: column;
      gap: 20px;
    }
    aside {
      width: 100%;
      align-self: center;
    }
  }
`;
