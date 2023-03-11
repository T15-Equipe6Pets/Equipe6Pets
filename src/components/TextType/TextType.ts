import styled from "styled-components";
interface Props {
  color: string;
  fontSize: string;
  lineHeiht?: string;
  fontWeight?: string;
  marginTop?: string;
  marginBot?: string;
}

export const TextTag = styled.h3`
  font-family: "Inter";
  font-style: normal;
  font-size: ${(props: Props) => props.fontSize};
  color: var(${(props: Props) => props.color});
  line-height: ${(props: Props) => props.lineHeiht};
  font-weight: ${(props: Props) => props.fontWeight};
  margin: 0 auto;
  margin-top: ${(props: Props) => props.marginTop};
`;
