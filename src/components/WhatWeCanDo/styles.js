import styled from "styled-components";

export const Wrap = styled.div`
  background-color: white;
  min-height: 600px;
  width: 100%;
  margin-bottom: 64px;
`;

export const Container = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0px 32px;
  gap: 64px;
  max-width: 1280px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0;
    width: 100%;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 16px;
  width: 70%;

  @media (max-width: 768px) {
    width: 80%;
    align-items: center;
    justify-content: center;
    margin-top: 64px;
  }
`;

export const Title = styled.h2`
  text-align: left;
  color: black;
  font-size: 32px;
  font-weight: normal;
  font-family: "Qubic", sans-serif;

`;

export const Text = styled.p`
  text-align: left;
  color: black;
  font-size: 16px;
  font-weight: normal;
  font-family: "Montserrat", sans-serif;

`;

export const BlockContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 768px) {
    gap: 16px;
    flex-direction: column;
  }
`;

export const Block = styled.div`
  width: 230px;
  height: 260px;
  border-radius: 16px;
  border: 1px solid #bac8e5;
  padding: 16px 20px;
  gap: 16px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
  }
`;

export const BlockTitle = styled.h3` 
    text-align: left;
    color: black;
    font-size: 20px;
    font-weight: normal;
    font-family: "Qubic", sans-serif;
`;

export const BlockText = styled.p`
    text-align: left;
    color: black;
    font-size: 14px;
    font-weight: normal;
    font-family: "Montserrat", sans-serif;
`;

export const Button = styled.button`
  padding: 0.8rem 2rem;
  font-size: 16px;

  color: white;
  background: linear-gradient(90deg, #014c80 0%, #497fa6 100%);

  border: none;
  border-radius: 24px;
  cursor: pointer;
  transition: 0.3s;

  justify-self: center;

  width: 230px;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SideImage = styled.img`
  width: 30%;
  height: 100%;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 100%;
    height: 160px;
  }
`;
