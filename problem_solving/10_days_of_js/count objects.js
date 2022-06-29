//* Return a count of the total number of objects 'o' satisfying o.x == o.y.

function getCount(objects) {
  let count = 0;
  for (let i = 0; i < objects.length; i++) {
    if (objects[i].x === objects[i].y) {
      count++;
    }
  }

  return count;
}
///////////////////////////////
//returns the length of a new array with the objects that satisfies the condition

const getCount = (objects) => objects.filter((o) => o.x == o.y).length;
// ///////////////////////////////
//notice that i can access the objects by index through

const obj = {
  potato: "1",
  mango: "2",
  apples: "3",
};

var key = Object.keys(obj)[1];
console.log(obj[key]);
// ///////////////////////////////
//access object keys

var o = { key1: "value1", key2: "value2" };
var val = o["key2"]; // value2
var val2 = o.key1;
// ///////////////////////////////
//access the object through index by converting object to an array throw the ".keys()" method

o = { key1: "value1", key2: "value2" };
var idx = 1; // key2

var key = Object.keys(o)[idx];
value = o[key];

console.log(key, value); // key2 value2
// ///////////////////////////////
//print out each key and value

var o = { key1: "value1", key2: "value2" };
for (var prop in o) {
  console.log(prop, o[prop]);
}
