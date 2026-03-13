import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  margin: 64px auto;
  align-items: flex-start;
  gap: 64px;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    margin: 32px auto;
    align-items: center;
    text-align: center;
  }
`;

export const FAQContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 32px;
  }
`;

export const ImageContainer = styled.div`
    display: flex;
    width: 50%;
    height: auto;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
      display: none;
    }
`;

export const Image = styled.img`
    width: 100%;
    height: auto;
`;

export const Title = styled.h2`
  font-family: "Qubic", sans-serif; 
    font-weight: normal;
    font-size: 32px;
    color: black;
    margin-bottom: 16px;
`;

export const Text = styled.p`
    font-family: "Montserrat", sans-serif;
    font-weight: normal;
    font-size: 16px;
    color: black;
    margin-bottom: 16px;
    
`;