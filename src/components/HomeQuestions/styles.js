import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  margin: 64px auto;
  align-items: flex-start;
  gap: 64px;
`;

export const FAQContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const ImageContainer = styled.div`
    display: flex;
    width: 50%;
    height: auto;
    justify-content: center;
    align-items: center;
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