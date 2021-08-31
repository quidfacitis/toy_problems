function digital_root(n) {
  // base case
  if (n.toString().length === 1) {
    return n;
  }
  // turn number to string, split into individual digits, and add up total
  return digital_root(n.toString().split('').reduce((accumulator, currentValue) => accumulator + Number(currentValue), 0));
};

// Test.assertEquals( digital_root(16), 7 )
// Test.assertEquals( digital_root(456), 6 )
