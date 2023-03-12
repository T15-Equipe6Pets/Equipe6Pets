import styled from "styled-components";
export const StyledRegister = styled.div`
  @media (min-width: 768px) {
    width: 400px;
    margin: 0 auto;
    .button {
      height: 32px;
      width: 80px;
      color: var(--grey-0);
      background-color: var(--grey-3);
      text-decoration: none;
      display: flex;
      flex-direction: center;
      align-items: center;
      padding-left: 18px;
    }
    .header_Container {
      width: 95%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      margin-top: 60px;
      margin-bottom: 40px;
    }
    h1 {
      font-size: 25px;
    }
  }
`;
export const StyledMain = styled.main`
  width: 95%;
  margin: 0 auto;

  background-color: var(--Grey-02);
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    display: flex;
    justify-content: center;
  }
  select {
    height: 38px;
    background-color: var(--Grey-03);
    color: var(--Grey-04);
    width: 90%;
    margin: 0 auto;
    margin-bottom: 16px;
    border: none;
    border-radius: 4px;
    padding-left: 16px;
  }
  form {
    display: flex;
    flex-direction: column;
    background-color: var(--grey-3);
  }

  label {
    color: var(--grey-0);
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 9.73988px;
    width: 90%;
    margin: 0 auto;
    margin-bottom: 18px;
    margin-top: 22px;
  }
  button {
    margin-top: 30px;
    margin-bottom: 40px;
  }
`;
