
document.querySelector('#submit').addEventListener('click', dayCheck)

function dayCheck(){
  let message=''
  document.querySelector('#day').value.toLowerCase()

    if(day === "tuesday" || day === "thursday"){
    mesage="YOU HAVE CLASS"
  }else if( day === "saturday" || day === "sunday"){
   message="Its The Weekend"
  }else{
    message="BORING"
  }
  document.querySelector('#placeToSee').innerHTML=message

}
