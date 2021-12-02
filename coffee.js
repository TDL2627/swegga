let mjacket= 180.95;
let fjacket= 150.95;

function male(ans) {
    ans = parseFloat(ans);
    let maleP=(ans*mjacket).toFixed(2);
    document.getElementById("totalM").innerHTML="R"+maleP;
    
  }
 
  function female(ans1) {
    ans1 = parseFloat(ans1);
    document.getElementById("totalF").innerHTML="R"+(ans1*fjacket).toFixed(2);
  } 
  function totality(){
  ansF=document.getElementById("totalF").innerHTML;
  ansM=document.getElementById("totalM").innerHTML;
  finalanswer = ansF.replace(/R/g, "");
  finalanswer1 = ansM.replace(/R/g, "");
  Fans=(Number(finalanswer)+Number(finalanswer1)).toFixed(2);
  let finalAns= String("R"+Fans);
    document.getElementById("final").innerHTML=finalAns;
  }