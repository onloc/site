import styled from "styled-components";

export const Image = styled.img`
  width: 622px;
  height: 432px;
  opacity: 1;
  border-width: 1px;
`;

export const Title = styled.h1`
  font-family: "Quicksand";
  font-weight: 500;
  font-size: 40px;
  line-height: 125%;
  color: #1e1e20;
  margin-bottom: 16px;
`;

export const Text = styled.p`
  font-family: "Montserrat";
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: #0e1017;
  margin-bottom: 24px;
`;

export const Subtitle = styled.p`
  font-family: "Lato";
  font-weight: 700;
  font-size: 16px;
  line-height: 125%;
  color: #014c80;
  margin-bottom: 16px;
`;

export const CommentContainer = styled.div`
  width: 592px;
  border-radius: 8px;
  padding: 24px;
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  margin-bottom: 24px;
`;

export const Comment = styled.p`
  font-family: "Montserrat";
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: #4c5258;
`;

export const CommentAuthor = styled.p`
  font-family: "Lato";
  font-weight: 700;
  font-size: 16px;
  line-height: 125%;
  color: #0e1017;
  margin: 0;
`;

export const CommentAuthorRole = styled.p`
  font-family: "Lato";
  font-weight: 400;
  font-size: 14px;
  line-height: 125%;
  color: #014c80;
  margin: 0;
`;

export const CommentFooterContainer = styled.div`
  width: 592px;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AuthorDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CommentAuthorInfoIcon = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
`;

export const NavButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  img {
    cursor: pointer;
    width: 16px;
    height: 16px;
    object-fit: contain;
  }
`;

export const SectionContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 80px;
  padding: 40px;
  max-width: 1280px;
  margin: 0 auto;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
