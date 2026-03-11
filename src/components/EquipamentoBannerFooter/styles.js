import styled from "styled-components";

export const Container = styled.div`
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070");

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  padding: 80px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  min-height: 300px;
`;

export const Title = styled.h2`
  font-family: "Quicksand";
  font-weight: 500;
  font-size: 40px;
  line-height: 125%;
  text-align: center;
  color: #fff;
  margin: 0;
  max-width: 800px;
`;

export const Subtitle = styled.p`
  font-family: "Montserrat";
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  text-align: center;
  color: #fff;
  margin: 0;
  max-width: 600px;
`;
