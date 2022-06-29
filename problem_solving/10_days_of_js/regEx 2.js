function regexVar() {
  /*
   * Declare a RegExp object variable named 're'
   * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.',
   * followed by one or more letters.
   */

  // ^ => start with
  // . => any character || \. => period
  // \w+ => any sequence of letters. w alone is a char.
  // \ => ignor or special treatment like pressing shift key
  // $ => end with
  // ( | | | ) => choose one of the group
  // [-----] => character class, any character from the sequence inside

  const re = /^(Mr|Mrs|Ms|Dr|Er)\.\w+$/;
  /*
   * Do not remove the return statement
   */
  return re;
}

function main() {
  const re = regexVar();
  const s = readLine();

  console.log(!!s.match(re));
}
