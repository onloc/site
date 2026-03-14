import styled from "styled-components";

export const Text = styled.p`
  font-family: ${(props) => props.$variant};
  color: ${(props) => props.$colorText};
  font-weight: ${(props) => props.$fontWeight};
  font-size: ${(props) => props.$fontSize};
  font-style: ${(props) => props.$fontStyle};

  line-height: 125%;
  letter-spacing: 0%;

  @media (max-width: 768px) {
    font-size: ${(props) =>
      props.$fontSize ? `calc(${props.$fontSize} * 0.9)` : "inherit"};
  }
`;
