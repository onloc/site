import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  max-width: 1280px;
  margin: 64px auto 0px auto;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 32px 16px 0 16px;
  }
`;