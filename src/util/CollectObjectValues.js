// From array of objects, given the object key, count how many times a particular value comes up in that key

const CollectObjectValues = (arr, key, value) => {
  return arr.reduce((prev, curr) => {
    if (curr[key] === value) {
      return (prev += 1);
    }

    return prev;
  }, 0);
};

export default CollectObjectValues;
