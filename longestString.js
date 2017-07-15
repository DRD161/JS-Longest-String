function findLongestWord(str) {
  var strSplit = str.split(' ');
  
  var longest = strSplit.sort(function(x, y) {
    return y.length - x.length;
});
  
  return longest[0].length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");