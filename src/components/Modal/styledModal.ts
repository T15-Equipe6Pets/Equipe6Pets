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
  .deleteBt {
    width: 70px;
  }
  header {
    background-color: var(--grey-2);
    width: 100%;
    display: flex;
    justify-content: center;
    height: 30px;
    align-items: center;
    padding: 20px;
    border-radius: 4px 4px 0 0;
  }
  .containerBt {
    display: flex;
    gap: 20px;
    width: 100%;
    margin-top: 20px;
    padding: 10px;
  }
  > div {
    background-color: var(--grey-3);
    width: 300px;
    display: flex;
    flex-direction: column;
    border-radius: 4px;

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
        color: var(--grey-1);
        font-size: 18px;
      }
    }
  }
`;
