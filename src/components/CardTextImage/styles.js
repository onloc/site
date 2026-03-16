import styled from "styled-components";

export const Container = styled.div`
  width: 384px;
  height: 480px;
  border-radius: 20px;

  background-image: url(${(props) => props.$bgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

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
