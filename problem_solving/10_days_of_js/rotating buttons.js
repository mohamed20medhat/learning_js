  let btn5 = document.getElementById("btn5")
  
  //anticlock wise code
  // btn5.onclick =() => {
  //     let first = btn1.innerHTML;
  //     btn1.innerHTML = btn2.innerHTML;
  //     btn2.innerHTML = btn3.innerHTML;
  //     btn3.innerHTML = btn6.innerHTML;
  //     btn6.innerHTML = btn9.innerHTML;
  //     btn9.innerHTML = btn8.innerHTML;
  //     btn8.innerHTML = btn7.innerHTML;
  //     btn7.innerHTML = btn4.innerHTML;
  //     btn4.innerHTML = first 
  // }  
  
  //almost
  // btn5.onclick =() => {
  //     let last = btn7.innerHTML;
  //     btn7.innerHTML = btn6.innerHTML;
  //     btn8.innerHTML = btn9.innerHTML;
  //     btn9.innerHTML = btn6.innerHTML;
  //     btn6.innerHTML = btn3.innerHTML;
  //     btn3.innerHTML = btn2.innerHTML;
  //     btn2.innerHTML = btn1.innerHTML;
  //     btn1.innerHTML = btn4.innerHTML;
  //     btn4.innerHTML = last 
  // }  
  
  //working, had to use the phone to take a photo of
  //what i'm going to do
  btn5.onclick =() => {
      let last = btn7.innerHTML;
      btn7.innerHTML = btn8.innerHTML;
      btn8.innerHTML = btn9.innerHTML;
      btn9.innerHTML = btn6.innerHTML;
      btn6.innerHTML = btn3.innerHTML;
      btn3.innerHTML = btn2.innerHTML;
      btn2.innerHTML = btn1.innerHTML;
      btn1.innerHTML = btn4.innerHTML;
      btn4.innerHTML = last 
  }