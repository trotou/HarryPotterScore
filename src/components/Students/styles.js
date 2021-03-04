import styled from "styled-components";
import FormDialog from "../Dialog";

export const StudentsDiv = styled.div`
  background-image: url("./images/scroll.png");
  background-size: cover;
  width: 90%;
  height: 30%;
  padding: 3%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: black;
  font-family: "Meddon", cursive;
  font-size: 20px;

  @media (max-width: 750px) {
    font-size: 15px;
  }

  @media (max-width: 400px) {
    font-size: 0.8rem;
  }
`;

export const StudentP = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 400px) {
    justify-content: space-evenly;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
`;

export const FormDial = styled(FormDialog)`
  margin: 0;
  padding: 0;
  font-size: 5rem;
`;
