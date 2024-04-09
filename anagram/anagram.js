//Explain the concept of anagram and write a function to
//check if two strings are anagrams of each other.

//start with two or more words and rearrange their letters to form a new word or phrase
//cat = act
function anagram(str1, str2) {
  let a = str1.split("");
  let b = str2.split("");
  a.sort();
  b.sort();
  if (a.join("") == b.join("")) {
    return "Anagram";
  } else {
    return "Not Anagram";
  }
}
console.log(anagram("cat", "act"));
