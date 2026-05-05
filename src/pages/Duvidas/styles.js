import styled from "styled-components";

export const Title = styled.h1`
    font-family: "Qubic", sans-serif;
    font-weight: normal;
    font-size: 44px;
    color: black;
    margin-bottom: 64px;
    width: 40%;

    @media (max-width: 768px) {
        font-size: 32px;
        text-align: left;
        width: 100%;
        margin-bottom: 32px;
    }
`;

export const FAQContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 64px auto;
  max-width: 1280px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 32px;
    margin: 32px auto;
  }
`;