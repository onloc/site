import styled, { css } from "styled-components";

export const Button = styled.button`
  margin-top: 25px;

  ${(props) =>
    props.$flex &&
    css`
      flex: 1;
    `}

  width: auto;
  min-width: ${(props) => props.$minWidth};
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

  ${(props) => {
    switch (props.$variant) {
      case "black":
        return css`
          background: #0e1017;
          color: #eee9e9;
        `;
      case "white":
        return css`
          background: #fff;
          color: #000;
          border: 1px solid #a4c8de;
          font-family: "Quicksand";
          font-weight: 500;
          font-size: 18px;

          &:hover {
            background: #014c80;
            color: #eee9e9;
          }
        `;
      case "blue":
        return css`
          background: #014c80;
          color: #eee9e9;
          font-family: "Quicksand";
          font-weight: 500;
          font-size: 18px;
        `;
      case "outline":
        return css`
          background: transparent;
          border: 2px solid #014c80;
          color: #014c80;

          &:hover {
            background: #014c80;
            color: #fff;
          }
        `;
      default:
        return css`
          background: linear-gradient(90deg, #014c80 0%, #497fa6 100%);
          color: white;
        `;
    }
  }}
`;
