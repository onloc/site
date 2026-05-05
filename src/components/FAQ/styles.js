import styled from "styled-components";

export const FAQContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 1280px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-family: "Quicksand", sans-serif;
  font-weight: 500;
  font-size: 24px;
  line-height: 125%;
  color: #1e1e20;
`;

export const AccordionItem = styled.div`
  border-bottom: 1px solid #1e1e20;
  overflow: hidden;
`;

export const AccordionHeader = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ $variant }) => ($variant === "home" ? "16px 0" : "30px 0")};
  cursor: pointer;
  gap: ${({ $variant }) => ($variant === "home" ? "0px" : "12px")};
  font-family: "Qubic Grid", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: ${({ $variant }) => ($variant === "home" ? "18px" : "24px")};
  line-height: 125%;
  letter-spacing: 0%;

  .number {
    margin-right: 50px;
  }

  .title {
    flex: 1;
  }

  .icon {
    transition: transform 0.3s ease;
    transform: ${({ $isOpen }) => ($isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  }

  @media (max-width: 768px) {
    text-align: left;
    font-size: 16px;
    padding: 16px 0;

    .number {
      margin-right: 16px;
    }
  }
`;

export const AccordionContent = styled.div`
  font-family: "Montserrat";
  font-weight: 400;
  font-style: Regular;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: 0%;

  margin: ${({ $variant, $isOpen }) =>
    $isOpen ? ($variant === "home" ? "16px 0" : "24px 0") : "0"};
  max-height: ${({ $isOpen }) => ($isOpen ? "400px" : "0")};
  opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
  padding-bottom: ${({ $isOpen }) => ($isOpen ? "16px" : "0")};
  transition: all 0.3s ease-in-out;
  color: #555;

  @media (max-width: 768px) {
    text-align: left;
    font-size: 14px;
}
`;
