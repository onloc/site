import styled, { css } from "styled-components";

export const Button = styled.button`
  margin-top: 25px;

  width: auto;
  min-width: 239px;
  height: auto;
  min-height: 45px;
  white-space: nowrap;

  gap: 8px;
  opacity: 1;
  border-radius: 47px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 40px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  background: linear-gradient(90deg, #014c80 0%, #497fa6 100%);
  color: white;

  &:hover {
    background: #0e1017;
    color: #eee9e9;
  }

  ${(props) =>
    props.variant === "black" &&
    css`
      background: #0e1017;
      color: #eee9e9;

      &:hover {
        background: #0e1017;
        color: #eee9e9;
      }
    `}
`;
