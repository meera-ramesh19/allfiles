const textArea=document.getElementById('string')
const btn=document.getElementById('btn')
const ctr=document.getElementById('counterFooter')

function showText(){
  let textLength=text.value.length-1;
  ctr.innerHTML=`${140-textLength}/140`;
  if(textLength===0){
    btn.classList.add('buttonDisabled');
    textArea.style.color='red'
  }else if (textLength<=20){
    btn.classList.remove('buttonDisabled');
    ctr.style.color='red'
  }else if(textLength<0){
    btn.classList.add('buttonDisabled');
   ctr.style.color='red'
  }else{
    ctr.style.color = 'white';
    btn.classList.remove('buttonDisabled');
  }
}

textArea.addEventListener("keydown", function(event){
  showText()
});