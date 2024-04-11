export const removeKey = (arr, keyy) => {
  //   delete key from the objs of array
  const withOutkey = arr.map((obj) => {
    return Object.keys(obj)
      .filter((key) => key !== keyy)
      .reduce((newObj, key) => {
        newObj[key] = obj[key];
        return newObj;
      }, {});
  });
  return withOutkey;
};
