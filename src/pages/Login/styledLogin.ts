import styled from "styled-components";

export const StyledContainerLogin = styled.div`
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
    margin: 0 auto;
  }
  @media (min-width: 768px) {
    width: 400px;
    margin: 0 auto;
  }

  .linkTag {
    height: 38px;
    width: 90%;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--grey-1);
    color: var(--grey-0);
    margin: 30px auto;
    border: none;
    text-decoration: none;
    border-radius: 4px;
    :hover {
      filter: brightness(90%);
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
    border-radius: 4px;
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
