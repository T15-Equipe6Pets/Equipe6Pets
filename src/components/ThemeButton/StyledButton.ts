import styled, { ThemedStyledProps } from "styled-components";
export interface Props {
  backgroundColor?: string;
  color?: string;
  hoverBackground?: string;
  type?: string;
  hoverColor?: string;
}

export const ThemeButton = styled.button`
  height: 38px;
  width: 90%;
  background-color: var(${(props: Props) => props.backgroundColor});
  color: var(${(props) => props.color});
  margin: 0 auto;
  border: none;
  border-radius: 4px;
  :hover {
    background-color: var(${(props: Props) => props.hoverBackground});
    color: var(${(props: Props) => props.hoverColor});
  }
`;
