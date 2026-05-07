import styled from "styled-components";

export const Page = styled.div`
  width: 100%;
`;

export const ViewerSection = styled.section`
  background: #eff2f3;
`;

export const DetailsSection = styled.section`
  background: #fff;
  padding: 100px 200px;

  @media (max-width: 1024px) {
    padding: 80px 80px;
  }

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

export const RecomendedSection = styled.section`
  background: #eff2f3;
  padding: 100px;

  @media (max-width: 1024px) {
    padding: 80px 40px;
  }

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

export const Title = styled.h1`
  font-family: "Quicksand";
  font-weight: 500;
  font-size: 24px;
  line-height: 125%;
  color: #1e1e20;

  margin-bottom: 24px;
`;

export const Divider = styled.hr`
  margin: 128px auto;

  @media (max-width: 768px) {
    margin: 80px 0;
  }
`;

export const NotFound = styled.div`
  padding: 100px;
  text-align: center;
`;