// import { createContext } from "react";
// import { useState } from "react";

// export const HouseContext = createContext();

// localStorage.setItem(
//   "houses",
//   JSON.stringify([
//     {
//       Gryffindor: 500,
//       Hufflepuff: 500,
//       Ravenclaw: 500,
//       Slytherin: 500,
//     },
//   ])
// );

// // export const HouseProvider = ({ children }) => {
//   const handleSub = (i, num) => {
//     const houses = JSON.parse(localStorage.getItem("houses"));
//     houses[0][i.house] = houses[0][i.house] - num;
//     localStorage.setItem("houses", JSON.stringify(houses));
//   };

// const handleAdd = (i, num) => {
//   const houses = JSON.parse(localStorage.getItem("houses"));
//   houses[0][i.house] =
//     Number.parseInt(houses[0][i.house]) + Number.parseInt(num);
//   localStorage.setItem("houses", JSON.stringify(houses));
// };

//   const [items, setItems] = useState(["", ""]);

//   const handleItems = (val) => {
//     setItems(val);
//   };

//   return (
//     <HouseContext.Provider value={{ handleSub, handleAdd, handleItems, items }}>
//       {children}
//     </HouseContext.Provider>
//   );
// };
