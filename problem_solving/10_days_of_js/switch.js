

//this is how to write switch condition for multi choises together 
function getLetter(s) {
    let letter;
    // Write your code here
    s = s.toLowerCase()
    switch (s[0]) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            letter = "A"
            break;
        case "b":
        case "c":
        case "d":
        case "f":
        case "g":
            letter = "B"
            break;
        case "h":
        case "j":
        case "k":
        case "l":
        case "m":
            letter = "C"
            break;
        default:
            letter = "D";      
        
    }
    
    
    
    
    return letter;
}

//https://www.hackerrank.com/challenges/js10-switch/problem