
Extract the domain name from a URL

Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"
FUNDAMENTALSPARSINGALGORITHMSSTRINGSREGULAR EXPRESSIONSDECLARATIVE PROGRAMMINGADVANCED LANGUAGE FEATURES


function domainName(url){
  //your code here
  if(url.indexOf('www')>-1) return url.split('.')[1]
  if(url.indexOf('//')>-1) return url.split('//')[1].split('.')[0]
  return url.split('.')[0]
}


function domainName(url) {
  return url
    .replace(/http[s]?:\/\//, "")
    .replace(/www./, "")
    .split(".")[0];
}



function domainName(url){
  url = url.split('//');
  url = url.filter(arr => arr.includes('.')).join('').split('.');
  return url.filter(arr => arr !== 'www' && arr !== 'com')[0];
}


const domainName = url =>
  url.replace(/.*\/\/|www.|\..*/g, ``);
