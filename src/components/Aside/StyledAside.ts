import styled from "styled-components";

export const StyledAside = styled.aside`
  padding: 20px;

  background-color: var(--grey-3);
  h1 {
    color: var(--white-neutral);

    margin-bottom: 20px;
  }
  .pet-card__container {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;
