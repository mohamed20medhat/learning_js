const a = 1;
const b = 2;
const c = 3;

document.write(d);
// causes a fatel error ==> refrencing a varyable that doesn't exist ==> won't continue the script after the error

try {
  function getVarValue(anything) {
    document.write(anything + `<br/><br/>`);
  }
  getVarValue(d);
} catch (ex) {
  //will try to do what ever is in the parantasies and if it couldn't it will continue the script

  document.write(ex + "<br/><br/>");
}
//if an error occared ==> will catch that error and do something in the "catch"

////////////////////////////////////////////////////////////////

document.write(10 / 0);
//output infinty

try {
  function divide(numer, denom) {
    if (denom == 0) {
      throw new Error("cannot divide by zero");
      //create a new error
    }
    document.write(numer / denom);
  }
  divide(10, 0);
} catch (ex) {
  document.write(ex + "<br/><br/>");
  //pass the error to the document.write
}

////////////////////////////////////////////////////////////////

let s = ["Tom", "tom@abc.com", "Jenny", "jenny@abc.com", "Sally"];
let i = 0;
let names = [];
let e = [];
let error_count = 0;

while (i < s.length) {
  try {
    let result = s[i].search(/@/); //regular expression
    if (result == -1) {
      names.push(s[i]);
    } else {
      throw new Error(s[i] + "is not a valid name");
    }
  } catch (ex) {
    e.push(ex);
    error_count++;
  } finally {
    i++; //this happens anyways
  }
}

document.write(names + "<br/><br/>");
document.write("An error was caight" + e.length + "time(s)<br/><br/>");

////////////////////////////////////////////////////////////////

let x = prompt("Please enter a varyable between 0 and 10", "");

try {
  if (x > 10) {
    throw "err1";
  } else if (x < 10) {
    throw "err2";
  }
} catch (er) {
  if (er == "err1") {
    alert("your number is greater than 10");
  }

  if (er == "err2") {
    alert("your number is less than 0");
  }
}

////////////////////////////////////////////////////////////////

//my code for solving the problem
function reverseString(s) {
  let exHappened = false;
  try {
    let myArr = s.split("");
    myArr = myArr.reverse();
    var myStr = myArr.join("");
  } catch (e) {
    console.log(e.message);
    exHappened = true;
  } finally {
    if (exHappened) {
      console.log(s);
    }

    if (!exHappened) {
      console.log(myStr);
    }
  }
}

////////////////////////////////////////////////////////////////

//another solution
function reverseString(s) {
  try {
    s = s.split("").reverse().join("");
  } catch (exception) {
    console.log(exception.message);
  } finally {
    console.log(s);
  }
}
