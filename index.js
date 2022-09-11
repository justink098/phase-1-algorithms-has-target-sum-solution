function hasTargetSum(array, target) {
  const seenNumbers ={}
  
  for(i=0; i< array.length; i++){
    const complement = target - array[i]
    if(seenNumbers[complement]) return true;
    seenNumbers[array[i]] = true
    console.log(seenNumbers)
  }
  // Write your algorithm here
  return false
}

/* 
  Write the Big O time complexity of your function here
  Runtime; O(n^2)
  space: O(n)
*/

/* 
  iterate through each number in the array
    for the current number identify the compiment that adds to the target (sum = target -num)
    iterate through the rest of the array
    check if any key on our object is the complement
    if so return true
    otherwise, add that number to the object
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([12, 18, 22, 26, 11, 8], 30));
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
