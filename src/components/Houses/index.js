import { Div, Img } from "./styles";
import { useSelector } from "react-redux";

const Houses = () => {
  const items = useSelector((state) => state.points.houses);
  const sorted = [];

  if (items !== undefined) {
    for (let house in items[0]) {
      sorted.push([house, items[0][house]]);
    }
    sorted.sort(function (a, b) {
      return a[1] - b[1];
    });
  }

  return (
    <>
      {sorted[0] !== undefined ? (
        <Div>
          <div>
            <p>#4</p>
            <Img alt="unloaded" src={`./images/${sorted[0][0]}.png`} />
            <p> {sorted[0][1]}</p>
          </div>
          <div>
            <p>#3</p>
            <Img alt="unloaded" src={`./images/${sorted[1][0]}.png`} />
            <p> {sorted[1][1]}</p>
          </div>
          <div>
            <p>#2</p>
            <Img alt="unloaded" src={`./images/${sorted[2][0]}.png`} />
            <p>{sorted[2][1]}</p>
          </div>
          <div>
            <p>#1</p>
            <Img alt="unloaded" src={`./images/${sorted[3][0]}.png`} />
            <p>{sorted[3][1]}</p>
          </div>
        </Div>
      ) : (
        <Div>
          <div>
            <p></p>
            <Img alt="unloaded" src={`./images/Slytherin.png`} />
            <p>500</p>
          </div>
          <div>
            <p></p>
            <Img alt="unloaded" src={`./images/Ravenclaw.png`} />
            <p>500</p>
          </div>
          <div>
            <p></p>
            <Img alt="unloaded" src={`./images/Hufflepuff.png`} />
            <p>500</p>
          </div>
          <div>
            <p></p>
            <Img alt="unloaded" src={`./images/Gryffindor.png`} />
            <p>500</p>
          </div>
        </Div>
      )}
    </>
  );
};
export default Houses;
