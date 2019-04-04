var words = ["ground", "control", "to", "major", "tom"];

// map(words, function(word) {
//   return word.length;
// });

// map(words, function(word) {
//   return word.toUpperCase();
// });

// map(words, function(word) {
//   return word.split('').reverse().join('');
// });

let map1 = words.map(function(word){
    // return word.charAt(0).toUpperCase() + word.substring(1);
    return word.charAt(0) + word.substring(1).toUpperCase();
});

console.log(map1);