
// icode for 3 cases upper, lower , capitalize
document.querySelector('#submit').addEventListener('click', convertCase);
document.querySelector('#toggle').addEventListener('click', toggleCase);
const outputArea = document.querySelector('#outputarea');
const textArea = document.querySelector('#textarea');
//accept text from user and convert
function convertCase() {
  outputArea.innerHTML = textArea.value.toLowerCase()
}

// toggle the text
function toggleCase() {
  const [string, stringLC] = [outputArea.value, outputArea.value.toLowerCase()];
  if(string === stringLC){
  	outputArea.value = capitalize(string);
  } else if(string === outputArea.value.toUpperCase()) {
  	outputArea.value = outputArea.value.toLowerCase();
  } else {
  	outputArea.value = string.toUpperCase();
  }
}

function capitalize(s){
	return s.charAt(0).toUpperCase() + s.slice(1);
}
