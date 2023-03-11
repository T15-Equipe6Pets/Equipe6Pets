import styled from "styled-components";

export const StyledCartModalBox = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(51, 51, 51, 0.5);
  gap: 10px;
  div {
    background-color: var(--grey-3);
    width: 300px;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    padding: 15px;

    > button {
      margin-top: 20px;
    }

    header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
      h3 {
        margin: 0;
      }

      button {
        color: var(--grey-2);
        font-size: 18px;
      }
    }
  }
`;
