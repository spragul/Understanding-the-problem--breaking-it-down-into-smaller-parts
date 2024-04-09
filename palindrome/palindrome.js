//Write a function that checks if a given string is a palindrome.

/*A palindrome is a word or a phrase that is the same whether you read it backwards or forwards,
 for example the word ' refer'.
*/
function palindrome(string) {
  let reverse = string.split("").reverse().join("");
  if (reverse == string) {
    return "Palindrome";
  } else {
    return "Not Palindrome";
  }
}
console.log(palindrome("momm"));

function palindrome1(string) {
  let reverse = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reverse = reverse + string[i];
  }
  if (reverse == string) {
    return "Palindrome";
  } else {
    return "Not Palindrome";
  }
}
console.log(palindrome1("mom"));

function palindrome2(string) {
  let l = Math.floor(string.length / 2);
  for (let i = l; i >= 0; i--) {
    if (string[i] !== string[string.length - 1 - i]) {
        return "Not Palindrome";
    }
  }
    return "Palindrome";
}
console.log(palindrome2("mam"));
