import styled from "styled-components";

export const Page = styled.div`
  background: #eff2f3;
`;

export const Section = styled.section`
  padding: 20px;
  margin: 64px auto;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
  text-align: justify;
  justify-content: center;
  max-width: 1280px;

  @media (max-width: 1024px) {
    margin: 80px 40px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 32px auto;
  }
`;

export const Column = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  gap: 24px;

  max-width: 592px;

  @media (max-width: 768px) {
    max-width: 100%;
    text-align: left;
  }
`;

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    display: ${(props) => (props.$display ? "flex" : "none")};
  }
`;

export const Image = styled.img`
  width: 100%;
  max-width: 587px;
  height: auto;
`;

export const HighlightBox = styled.div`
  background: #fff;
  padding: 24px;
  border-radius: 8px;
`;

export const VideoWrapper = styled.div`
  filter: drop-shadow(0 0 1px #aaaaaa) drop-shadow(0 0 0.5px #aaaaaa);
`;

export const VideoContainer = styled.div`
  background-color: #eff2f3;
  margin-left: 40px;
  margin-top: 120px;
  width: calc(100% - 40px);

  clip-path: polygon(150px 0%, 100% 0%, 100% 100%, 0% 100%, 0% 100px);

  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
    clip-path: none;
  }
`;

export const VideoImage = styled.img`
  display: block;
  margin-left: 140px;

  max-width: calc(100% - 140px);
  max-height: 585px;
  object-fit: contain;

  @media (max-width: 768px) {
    margin-left: 0;
    max-width: 100%;
    height: 248px;
    object-fit: cover;
  }
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

  width: 200px;
  min-height: 48px;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
