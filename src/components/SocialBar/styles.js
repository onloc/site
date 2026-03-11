import styled from "styled-components";


export const StyledSocialBar = styled.div`
  position: absolute;
  writing-mode: vertical-rl;
  transform: rotate(180deg);


  height: 90%;
  width: 70px;
  color: white;

  margin-left: 8px;
  border-left: 1px solid white;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

export const SocialIcon = styled.img`
    width: 24px;
    height: 24px;
    transform: rotate(90deg);
`; 