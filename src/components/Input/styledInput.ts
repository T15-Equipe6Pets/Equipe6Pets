import styled from "styled-components";

export const StyledFieldset = styled.fieldset`
  border: none;
  display: flex;
  flex-direction: column;
  label {
    color: var(--grey-0);
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    width: 90%;
    margin: 0 auto;
    margin-bottom: 18px;
    margin-top: 22px;
    font-size: 14px;
  }

  input {
    border: none;
    border-radius: 4px;
    height: 38px;
    background-color: var(--grey-2);
    color: var(--grey-0);
    width: 90%;
    margin: 0 auto;
    padding-left: 16px;
  }
  .error {
    color: var(--negative);
    flex-direction: inherit;
    width: 90%;
    margin: 0 auto;
    font-size: 14px;
  }
`;
