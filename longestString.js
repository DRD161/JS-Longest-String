// Define a function that takes a string as an argument
function findLongestWord(str) {
  
  // Splits the given string and puts the results into an array
  var strSplit = str.split(' ');
  
  /* Takes the split string and sorts it alphabetically using a compare function
     which compares two values (x, y) and depending on the rules set in the return statement
     decides which value goes first, second, etc. */
  var longest = strSplit.sort(function(x, y) {
    
    /* Returns the length of the 2 function arguments. Depending on the length
       of each string, the compare function determines the order of items in the array */
    return y.length - x.length;
});
  // Returns the longest string starting from the [0] index
  return longest[0].length;
}
// Call the findLongestWord function with a strng as an argument
findLongestWord("This is the string that will be tested.");
