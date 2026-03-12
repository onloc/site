import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  height: fit-content;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  margin-bottom: 128px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`;

export const Cube = styled.div`
  width: 200px;
  height: 200px;
  background-image: url(${(props) => props.$backgroundImage});
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  position: relative;

  border-radius: 16px;

  background-size: cover;
  background-position: center;

  &:hover {
    width: 250px;
    background: linear-gradient(90deg, #e8e8e8, rgb(204, 204, 204));
  }
`;

export const CubeContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.1s ease;
  flex-direction: row;
  padding: 0px;
  margin-right: -12px;

  ${Cube}:hover & {
    opacity: 1;
  }
`;

export const CubeImage = styled.img`
  width: 160px;
  height: 160px;
`;

export const Text = styled.p`
  color: black;
  font-size: 16px;
  text-align: center;
`;
