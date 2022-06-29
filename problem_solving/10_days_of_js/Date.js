// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
//https://www.youtube.com/watch?v=M3VEFVBRw-o
function getDayName(dateString) {
  let dayName;
  // Write your code here
  let date = new Date(dateString);
  let dayNum = date.getDay();
  dayName = getDayNameFromDayNum(dayNum);

  return dayName;
}

function getDayNameFromDayNum(num) {
  let week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return week[num];
}
