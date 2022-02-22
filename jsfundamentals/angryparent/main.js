// const fname = document.querySelector('#firstName').value;
// const sname = document.querySelector('#secondName').value;
// const mname=document.querySelector('#middleName').value;
// const lname= document.querySelector('#lastName').value;
// const radioButtons = document.querySelectorAll('input[name="choice"]');
// grab the value of the fields when submitted
document.querySelector('#btn-submit').addEventListener('click', inputData)

//input the data for the fields

function inputData(){
 const fname = document.querySelector('#firstName').value;
 const sname = document.querySelector('#secondName').value;
  const mname=   document.querySelector('#middleName').value;
 const lname= document.querySelector('#lastName').value;
 const radioButtons = document.querySelectorAll('input[name="choice"]');
let myrange=1;

let message='';
for (const radioButton of radioButtons) {
       if (radioButton.checked) {
             myrange = radioButton.value;
             break;
           }
    }

switch (true){
 case  myrange <=6:
    message = 'I am warning you before a time out'
     break;
 case myrange>=7 && myrange<=12:
    message = 'You are losing your privileges'
    break;

 case myrange>=13 && myrange<=18:
    message = 'You are grounded for a month at home'
     break; }
//    displayResults(message);
//  }

// // display results with the appropriate privileges taken away

// function displayResults(message){        document.querySelector('#results').style.backgroundColor='black'
document.querySelector('#results').innerHTML= ` ${fname} ${sname}  ${mname}   ${lname}   ${message}`
// blinkIt
for(var i=900; i < 4500; i=i+900)
 {
    setTimeout("hide()",i);
    setTimeout("show()",i+450);
  }

}

//reset the input fields
function reset(){
document.querySelector('#firstName').value=''
document.querySelector('#secondName').value=''
document.querySelector('#middleName').value=''
document.querySelector('#lastName').value=''
document.querySelector('#results').innerHTML=''
document.querySelector('#results').style.backgroundColor=''
 // document.getElementById("myForm").reset();
// document.getElementById('myInput').value = ''"
}

//blink "on" state
function show(){
if (document.getElementById)
document.getElementById("results").style.visibility = "visible";
}

// blink "off" state
function hide(){
if (document.getElementById)
document.getElementById("results").style.visibility = "hidden";
}
