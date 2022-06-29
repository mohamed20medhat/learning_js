//if the number was positive return YES
//if the number was negative throw a new error message
//if the number was equal zero throw a new error message

function isPositive(a) {
  if (a > 0) {
    return "YES";
  } else if (a == 0) {
    throw new Error("Zero Error");
  } else if (a < 0) {
    throw new Error("Negative Error");
  }
}
