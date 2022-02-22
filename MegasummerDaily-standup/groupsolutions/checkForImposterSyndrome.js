



Write a function checkForImposterSyndrome(str) that returns true if str contains 'not ready' or "can't interview yet", otherwise false

function checkForImposterSyndrome(str){
 let lowerCase=str.toLowerCase()
 return  lowerCase.includes('not ready') ||  lowerCase.includes( "can't interview yet"))?true:false
}
