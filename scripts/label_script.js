const input1 = document.getElementById("1")
const input2 = document.getElementById("2")
const input3 = document.getElementById("3")
const input4 = document.getElementById("4")
const input5 = document.getElementById("5")

const label1 = input1.parentElement.parentElement.children[0];
const label2 = input2.parentElement.parentElement.children[0];
const label3 = input3.parentElement.parentElement.children[0];
const label4 = input4.parentElement.parentElement.children[0];
const label5 = input5.parentElement.parentElement.children[0];


  input1.onfocus= () =>{
    label1.style.color = "rgb(123, 24, 236)" ;
  } 

  input1.onblur = () =>{
      if (input1.value==="") {
        label1.style.color = "black" ;
      }
  }

  input2.onfocus= () =>{
    label2.style.color = "rgb(123, 24, 236)" ;
  } 

  input2.onblur = () =>{
      if (input2.value==="") {
        label2.style.color = "black" ;
      }
  }

  input3.onfocus= () =>{
    label3.style.color = "rgb(123, 24, 236)" ;
  } 

  input3.onblur = () =>{
      if (input3.value==="") {
        label3.style.color = "black" ;
      }
  }

  input4.onfocus= () =>{
    label4.style.color = "rgb(123, 24, 236)" ;
  } 

  input4.onblur = () =>{
      if (input4.value==="") {
        label4.style.color = "black" ;
      }
  }

  input5.onfocus= () =>{
    label5.style.color = "rgb(123, 24, 236)" ;
  } 

  input5.onblur = () =>{
      if (input5.value==="") {
        label5.style.color = "black" ;
      }
  }

  //password check

  // input5=()=>{
  //   if (input4.value!==input5.value) {
  //       input4.style.borderBottom = "2px solid red";
  //       input5.style.borderBottom = "2px solid red";
  //   }
  // }