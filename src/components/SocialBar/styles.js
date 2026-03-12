import styled from "styled-components";

export const StyledSocialBar = styled.div`
  position: absolute;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  left: 0;

  height: 100%;
  width: 70px;

  color: ${props => props.color === "blue" ? "#838B92" : "white"};

  margin-left: 8px;
  border-left: 1px solid
    ${props => props.color === "blue" ? "#838B92" : "white"};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 30px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const SocialIcon = styled.img`
    width: 24px;
    height: 24px;
    transform: rotate(90deg);
`; 