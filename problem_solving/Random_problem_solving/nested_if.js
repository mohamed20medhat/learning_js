// the problem is here => https://javascript.info/logical-operators#check-the-login
let user = prompt("who are you?");
if (user === "Admin") {
    let password = prompt("what is the password");
    if (password === "TheMaster") {
        alert("Welcome");
    } else if (password === "" || password === null) {
        // Empty feild || null is cancel button or Esc
        alert("canceled");
    } else {
        alert("Wrong password");
    }
} else if (user === "" || user === null) {
    alert("canceled");
} else {
    alert("i don't know you");
}


// instead of using == he almost always uses ===. to make sure the things are type compatible too
// something like adding a lear of protection 
// when esc is pressed. it returns null. if no string was added. it returns an empty string ""