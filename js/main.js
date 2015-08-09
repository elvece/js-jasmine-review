// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');
});

function largestNumber(arr){
  var largest = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

module.exports = {
  largestNumber: largestNumber
};
