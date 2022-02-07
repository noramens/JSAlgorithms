// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.



function twoSum(arr, target){
  const hashtable = {};
  
  arr.forEach((item, index) => {
    hashtable[item] = index
  })
  
  for(let i=0; i<arr.length; i++){
    const diff = target - arr[i];
    if(hashtable.hasOwnProperty(diff) && map[diff] !== i){
      return [i, hashtable[diff]]
    }
  }
}

twoSum([1, 2, 4], 6)
