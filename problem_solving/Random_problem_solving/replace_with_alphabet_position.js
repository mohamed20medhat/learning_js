// add chars to string js = https://stackoverflow.com/questions/5754712/add-characters-to-a-string-in-javascript
// convert capital to lower case = https://www.w3schools.com/jsref/jsref_tolowercase.asp

function alphabetPosition(text) {
  let result = "";
  let num_of_changes = 0;
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < text.length; i++) {
    for (let x = 0; x < alphabet.length; x++) {
      if (text[i].toLowerCase() == alphabet[x]) {
        if (num_of_changes != 0) {
          result += " ";
        }
        result += x + 1;
        num_of_changes += 1;
      }
    }
  }

  return result;
}
