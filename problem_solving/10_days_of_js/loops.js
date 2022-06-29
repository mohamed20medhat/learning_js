function vowelsAndConsonants(s) {
    const vouldNumbers = ["a","e","i","o","u"]
    
    let voulsInText = []
    let noneVouls = []
    
    //if i found that the char is one of the chars i want you to add it to the list 
    //else if you compared it to all the chars and found that the char is not one of 
    //them . i want you to add that char to the noneVouls list 
    
    for (let i = 0 ; i < s.length ; i++){
        for (let y = 0 ; y < vouldNumbers.length ; y++){
            if (s[i].toLowerCase() === vouldNumbers[y] ){
                voulsInText.push( s[i] )
                break
            }
            
            if( y === vouldNumbers.length -1 ){
                noneVouls.push( s[i] )
            }
        }
    }
    
    for (let a =0 ; a < voulsInText.length ; a++){
        console.log( voulsInText[a] )
    }
    
    for (let b=0 ; b < noneVouls.length ; b++ ){
        console.log( noneVouls[b] )
    }
        
        
}



// vowelsAndConsonants("mamamia")
//notice how i used the "to lower case " not to worry about if it's capital or small 
// and it appends the orignal one to the list without the lower case ==> optimal soultion 
function VoulsSecondMethod (s){
    const vouldChars = ["a","e","i","o","u"]
    let consonantChars = []
    for (let i = 0 ; i < s.length ; i ++ ){
        for (let y=0 ; y < vouldChars.length; y++){
            if (s[i].toLowerCase() === vouldChars[y] ){
                console.log(s[i])
                break
            }

            if (y === vouldChars.length -1){
                consonantChars.push(s[i])
            }
        }
    }

    for (let a =0 ; a < consonantChars.length; a++){
        console.log( consonantChars[a]  )
    }

}

VoulsSecondMethod("maMamIa")

////////////////////////////////

function vowelsAndConsonants(s) {
  let vowels = ["a", "e", "i", "o", "u"];
  let vowelsStr = "aeiou";

  let voweled = "";
  let nonVoweled = "";

  // i want to iterate on each char and compare it to the "vowerls array"
  for (let i = 0; i < s.length; i++) {
    if (vowelsStr.includes(s[i])) {
      voweled += s[i];
    } else {
      nonVoweled += s[i];
    }
  }

  let wewe = voweled + nonVoweled;
  for (let v = 0; v < wewe.length; v++) {
    console.log(wewe.charAt(v));
  }
}