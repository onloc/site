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
`;
