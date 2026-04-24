import styled from "styled-components";

export const Container = styled.div`
  width: 384px;
  height: 480px;
  border-radius: 20px;

  ${(props) =>
    props.$bgImage
      ? `
        background-image: url(${props.$bgImage});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      `
      : `
        background-color: ${props.$bgColor || "blue"};
      `}

  display: flex;
  flex-direction: column;

  word-wrap: break-word;
  box-sizing: border-box;
  text-align: start;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export const Text = styled.p`
  font-family: "Quicksand", sans-serif;
  font-size: 24px;
  font-weight: 500;
  color: #fff;
  margin: 0;
`;
