//this is how to set numerical boundires in js
function getGrade(score) {
    let grade;
    // Write your code here
    if (0 <= score && score <= 5){
        grade = "F"
    }else if ( 5< score && score <=10 ){
        grade = "E"
    }else if (10 < score && score <= 15){
        grade = "D"
    }else if (15 < score && score <= 20){
        grade = "C"
    }else if ( 20 < score && score <= 25){
        grade = "B"
    }else if ( 25 < score && score <= 30){
        grade = "A"
    }
    
    return grade;
}





//using treinary operator in js
function main(input) {
    // The examples below all accomplish the same thing.

    // Example 1:
    input % 2 == 0 ? console.log(input + " is EVEN") : console.log(input + " is ODD");

    // Example 2:
    console.log( input + " is " + ((input % 2 == 0) ? "EVEN" : "ODD"));

    // Example 3:
    var parity = input % 2 == 0 ? "EVEN" : "ODD";
    console.log(input + " is " + parity);
}















