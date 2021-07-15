const input1 = document.getElementById("1")
const input2 = document.getElementById("2")
const input3 = document.getElementById("3")
const input4 = document.getElementById("4")
const input5 = document.getElementById("5")

const label1 = input1.parentElement.children[0];
const label2 = input2.parentElement.children[0];
const label3 = input3.parentElement.children[0];
const label4 = input4.parentElement.children[0];
const label5 = input5.parentElement.children[0];



  input1.onfocus= () =>{

    label1.style.transform = "translateY(-22px)";
    label1.style.color = "rgb(123, 24, 236)" ;
    label1.style.fontSize = "0.8rem";

  } 

  input1.onblur = () =>{
      if (input1.value==="") {
        label1.style.transform = "translateY(0px)";
        label1.style.color = "darkgray" ;
        label1.style.fontSize = "1rem";
      }
  }

  input2.onfocus= () =>{

    label2.style.transform = "translateY(-22px)";
    label2.style.color = "rgb(123, 24, 236)" ;
    label2.style.fontSize = "0.8rem";

  } 

  input2.onblur = () =>{
      if (input2.value==="") {
        label2.style.transform = "translateY(0px)";
        label2.style.color = "darkgray" ;
        label2.style.fontSize = "1rem";
      }
  }

  input3.onfocus= () =>{

    label3.style.transform = "translateY(-22px)";
    label3.style.color = "rgb(123, 24, 236)" ;
    label3.style.fontSize = "0.8rem";

  } 

  input3.onblur = () =>{
      if (input3.value==="") {
        label3.style.transform = "translateY(0px)";
        label3.style.color = "darkgray" ;
        label3.style.fontSize = "1rem";
      }
  }

  input4.onfocus= () =>{

    label4.style.transform = "translateY(-22px)";
    label4.style.color = "rgb(123, 24, 236)" ;
    label4.style.fontSize = "0.8rem";

  } 

  input4.onblur = () =>{
      if (input4.value==="") {
        label4.style.transform = "translateY(0px)";
        label4.style.color = "darkgray" ;
        label4.style.fontSize = "1rem";
      }
  }

  input5.onfocus= () =>{

    label5.style.transform = "translateY(-22px)";
    label5.style.color = "rgb(123, 24, 236)" ;
    label5.style.fontSize = "0.8rem";

  } 

  input5.onblur = () =>{
      if (input5.value==="") {
        label5.style.transform = "translateY(0px)";
        label5.style.color = "darkgray" ;
        label5.style.fontSize = "1rem";
      }
  }

  //password check

  // input5=()=>{
  //   if (input4.value!==input5.value) {
  //       input4.style.borderBottom = "2px solid red";
  //       input5.style.borderBottom = "2px solid red";
  //   }
  // }