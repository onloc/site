import styled from "styled-components";

export const Container = styled.div`
  margin: 120px 200px 120px 200px;

  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 32px;

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 120px auto 64px auto;
    width: 100%;
    padding: 0 20px;
  }
`;

export const Box = styled.div`
  flex: 1;
  width: 592px;
  height: 572px;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: -30px;
    left: -30px;
    width: 100%;
    height: 100%;
    border: 2px solid #aaaaaa;
    clip-path: polygon(70px 0, 100% 0, 100% 100%, 0 100%, 0 70px);

    border-radius: 16px;
    z-index: 1;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 16px;
    clip-path: polygon(70px 0, 100% 0, 100% 100%, 0 100%, 0 70px);
    z-index: 2;
  }

  & > * {
    position: relative;
    z-index: 3;
  }

  padding: 48px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 768px) {
    width: 100%;

    &::before {
      display: none;
    }
  }
`;

export const TimeLineBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  border-left: 2px solid #bac8e5;
  padding-left: 24px;
  margin-left: 10px;
`;

export const TimelineItem = styled.div`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: -31px;
    top: 6px;
    width: 12px;
    height: 12px;
    background-color: #014c80;
    border-radius: 50%;
    z-index: 5;
  }
`;

export const Title = styled.h2`
  text-align: center;
  color: black;
  font-size: 32px;
  font-weight: normal;
  font-family: "Qubic", sans-serif;

  @media (max-width: 768px) {
    font-size: 28px;
    text-align: left;
  }
`;
