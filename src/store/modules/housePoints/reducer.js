export const HouseReducer = (state = [], action) => {
  const { houses } = action;
  switch (action.type) {
    case "@house/SUB":
      return { houses };

    case "@house/ADD":
      return { houses };

    default:
      return state;
  }
};
