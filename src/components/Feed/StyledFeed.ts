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
  .text__input-area {
    textarea {
      color: var(--grey-0);
    }
    position: relative;
    button {
      position: absolute;
      top: 78%;
      right: 15px;
      color: var(--grey-0);
    }
    button:hover {
      color: var(--grey-1);
    }
  }
`;
