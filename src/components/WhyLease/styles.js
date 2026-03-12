import styled from "styled-components";

export const WhyLease = styled.div`
  width: 80%;
  height: 250px;
  position: relative;
  margin: 32px auto;
  border-radius: 16px;
  overflow: visible;
  margin-top: 64px;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url(${(props) => props.$backgroundImage});
    background-size: cover;
    background-position: center;
    border-radius: 16px;
    clip-path: polygon(
      60px 0%,
      100% 0%,
      100% 100%,
      75% 100%,
      75% 90%,
      60% 90%,
      60% 100%,
      0 100%,
      0 60px
    );
  }

  > * {
    position: relative;
    z-index: 1;
  }

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px;
  gap: 32px;
`;

export const WhyLeaseContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  width: 100%;
  margin: 0 auto;
  gap: 16px;
  width: 98%;
`;

export const WhyLeaseTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 16px;
`;

export const WhyLeaseTitle = styled.h2`
  color: white;
  font-size: 28px;
  font-weight: normal;
  font-family: "Qubic", sans-serif;
`;

export const WhyLeaseIcon = styled.img`
  width: 48px;
  height: 48px;
  margin-top: 16px;
`;

export const WhyLeaseText = styled.p`
  max-width: 550px;
  color: white;
  font-size: 16px;
  font-weight: normal;
  font-family: "Montserrat", sans-serif;
  text-align: left;
`;

export const WhyLeaseImage = styled.img`
  max-width: 240px;
  height: auto;
  object-fit: contain;
  z-index: 1;
`;
