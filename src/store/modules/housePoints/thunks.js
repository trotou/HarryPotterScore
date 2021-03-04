import { houseAdd, houseSub } from "./actions";

localStorage.setItem(
  "houses",
  JSON.stringify([
    {
      Gryffindor: 500,
      Hufflepuff: 500,
      Ravenclaw: 500,
      Slytherin: 500,
    },
  ])
);

export const addHousePointsThunks = (i, num) => (dispatch) => {
  const houses = JSON.parse(localStorage.getItem("houses"));
  houses[0][i.house] =
    Number.parseInt(houses[0][i.house]) + Number.parseInt(num);
  localStorage.setItem("houses", JSON.stringify(houses));
  dispatch(houseAdd(houses));
};

export const removeHousePointsThunks = (i, num) => (dispatch, getStore) => {
  const houses = JSON.parse(localStorage.getItem("houses"));
  houses[0][i.house] = houses[0][i.house] - num;
  localStorage.setItem("houses", JSON.stringify(houses));
  dispatch(houseSub(houses));
};
