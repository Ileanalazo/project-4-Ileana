



let button=document.querySelector(".submitButton");
let result=document.querySelector(".result");

button.onclick=(function() {
    let q1=document.querySelector(".question1").value;
    console.log(q1);
    let q2= document.querySelector(".question2").value;
    console.log(q2);
  
if (q1<=50 && q2 === "shop") {
    document.querySelector(".result").innerHTML= "If Your age is " + q1 + " and you picked " + q2 + " you are a Mall";}
else if (q1<=50 && q2 === "eat") {
    document.querySelector(".result").innerHTML= "If Your age is " + q1 + " and you picked " + q2 + " you are a Starbucks";}
else if (q1>=50 && q2 === "shop") {
    document.querySelector(".result").innerHTML= "If Your age is " + q1 + " and you picked " + q2 + " you are a Safeway";}
else if (q1>=50 && q2 === "eat") {
    document.querySelector(".result").innerHTML= "If Your age is " + q1 + " and you picked " + q2 + " you are coffe and bread store";
}
});