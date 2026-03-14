import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 592px;
  background-color: #eff2f3;
  border-radius: 12px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 100%;
    padding: 16px;
    margin: 16px auto;
  }
`;

export const Row = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const InputGroup = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  position: absolute;
  top: -10px;
  left: 15px;
  background-color: #eff2f3;
  padding: 0 5px;
  font-size: 14px;
  color: #4c5258;
  font-family: sans-serif;
`;

const baseInputStyles = css`
  width: 100%;
  padding: 15px;
  border-radius: 8px;
  background: transparent;
  font-size: 16px;
  outline: none;
  box-sizing: border-box;
  color: #4c5258;
  transition: all 0.2s ease;

  border: 2px solid ${(props) => (props.$hasError ? "#D32F2F" : "#ccc")};

  &::placeholder {
    color: #4c5258;
  }

  &:focus {
    border-color: ${(props) => (props.$hasError ? "#D32F2F" : "#014C80")};
  }
`;

export const Input = styled.input`
  ${baseInputStyles}
  height: 55px;
`;

export const TextArea = styled.textarea`
  ${baseInputStyles}
  resize: none;
`;

export const ErrorText = styled.span`
  color: #d32f2f;
  font-size: 12px;
  margin-top: 4px;
  font-family: sans-serif;
`;

export const CharCount = styled.span`
  font-size: 12px;
  color: #999;
  margin-top: 5px;
  font-family: sans-serif;
`;

export const Button = styled.button`
  margin-top: 25px;
  width: 100%;
  height: 45px;
  border-radius: 47px;
  border: none;
  cursor: pointer;
  background: #d3d6d8;
  color: #4c5258;
  font-size: 20px;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(90deg, #014c80 0%, #497fa6 100%);
    color: white;
  }
`;

export const FormTitle = styled.h1`
  font-family: "Quicksand";
  font-weight: 500;
  font-style: Medium;
  font-size: 24px;
  line-height: 125%;
  letter-spacing: 0%;
  color: #0e1017;
`;
