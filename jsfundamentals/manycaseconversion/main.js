document.querySelector('#submit').addEventListener('click', convert)


function convert(){
  const  textConvert = document.getElementById('original').value
  document.getElementById('lowercase').innerHTML=textConvert.toLowerCase()
  document.getElementById('uppercase').innerHTML=textConvert.toUpperCase()

 const titleText = titleCase(textConvert)
  document.getElementById('titlecase').innerHTML=titleText

  const sentenceText = sentenceCase(textConvert)
  document.getElementById('sentencecase').innerHTML = sentenceText

}

 function sentenceCase(str) {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
str[i]=str[i].charAt(0).toUpperCase() + str[i].substr(1).toLowerCase()
  }return str.join(' ');
}


function titleCase(str) {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(' ');
}
