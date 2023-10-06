export const isExist = (arr, newItem) =>
  arr.find(item => item.name.toLowerCase() === newItem.name.toLowerCase());
