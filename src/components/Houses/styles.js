import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const Img = styled.img`
  width: 40%;
  height: 50%;
  @media (max-width: 750px) {
    width: 40%;
    height: 45%;
  }

  @media (max-width: 400px) {
    width: 60%;
  }
`;
