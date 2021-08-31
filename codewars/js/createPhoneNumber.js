const createPhoneNumber = (numArr) => {
  // extract area code
  const areaCode = numArr.slice(0, 3).join('');
  // extract first three digits
  const firstThree = numArr.slice(3, 6).join('');
  // extract last four digits
  const lastFour = numArr.slice(6).join('');
  return `(${areaCode}) ${firstThree}-${lastFour}`;
};

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // "(123) 456-7890"