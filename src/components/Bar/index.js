import { Typography } from "@material-ui/core";
import { AvatarDiv, BarDiv, ToolBarDiv } from "./styles";

const Bar = () => {
  return (
    <BarDiv position="static">
      <ToolBarDiv>
        <AvatarDiv src={"./images/brasao.png"} />
        <Typography>Hogwarts Score Manager</Typography>
      </ToolBarDiv>
    </BarDiv>
  );
};

export default Bar;
