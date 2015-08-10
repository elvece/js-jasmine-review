//Problem 1
function largestNumber(arr){
  var largest = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

//Problem 2
function oddNumbers(num){
  var arr = [];
  if (num >= 40 && num <=100){
    for (var i = 40; i < num; i++) {
      if (i % 2 !== 0){
        arr.push(i);
      }
    }
    return arr;
  }
  else {
    return "Not a number 40 - 100";
  }
}

//Problem 3
function evenNumbers(num){
  var arr = [];
  if (num >= 0 && num <=100){
    for (var i = 0; i < num; i++) {
      if (i % 2 === 0){
        arr.push(i);
      }
    }
    return arr;
  }
  else {
    return "Not a number 1 - 100";
  }
}

console.log(evenNumbers(10));









module.exports = {
  largestNumber: largestNumber,
  oddNumbers: oddNumbers,
  evenNumbers: evenNumbers
};
