import styled from "styled-components";
import { Dialog, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export const DialogStudents = styled(Dialog)`
  background-image: url(https://images.ctfassets.net/usf1vwtuqyxm/4Wa2HR97aUemEiI4K2OIOG/28e457f1e3f31feafcf5ef7b9b52b68a/GreatHall_PM_B1C17M3_gryffindorWinningHouseCup_Moment.jpg);
`;

export const DivStudentHouse = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;
export const ImageHouse = styled.img`
  margin: 0;
  padding: 0;
  width: 30%;
  height: 50%;

  @media (max-width: 520px) {
    width: 25%;
  }
`;

export const ImageStudent = styled.img`
  width: 320px;
  height: 400px;

  @media (max-width: 520px) {
    width: 200px;
    height: 250px;
  }
`;

export const ImageBadge = styled.img`
  margin: 0;
  width: 15px;
`;

export const IconQuill = styled(IconButton)`
  width: 3.5rem;

  @media (max-width: 400px) {
    width: 2.8rem;
  }
`;

export const useStyles = makeStyles((theme) => ({
  dialogroot: {
    transition: "opacity 800ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
  },

  dialog: {
    backgroundImage:
      "url(https://www.wallpaperflare.com/static/513/522/339/nature-forest-digital-art-dark-wallpaper.jpg)",
    border: " 1px solid darkcyan",
  },

  root: {
    width: "85%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    fontSize: "biggest",
    color: "gold",
    [theme.breakpoints.down("sm")]: {
      width: "85%",
      flexDirection: "row",
      flexWrap: "wrap",
    },
  },

  textfield: {
    backgroundColor: "white",
    borderRadius: "5%",
    width: "55%",
    left: "5%",
    [theme.breakpoints.down("sm")]: {
      width: "50%",
      justifyContent: "space-around",
      marginRight: "6%",
      padding: "none",
    },
  },

  title: {
    fontFamily: "Cinzel",
  },

  actions: {
    display: "flex",
    justifyContent: "flex-start",
    marginLeft: "7%",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "none",
      justifyContent: "space-evenly",
    },
  },

  buttonGain: {
    backgroundColor: "orange",
    width: "25%",
    color: "#113243",
  },

  buttonLost: {
    backgroundColor: "#88b6d7",
    width: "25%",
    color: "#113243",
  },
}));
