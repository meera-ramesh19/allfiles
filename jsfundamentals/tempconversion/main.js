document.querySelector("#celsius").addEventListener('click', tocelsius)
document.querySelector("#fahrenheit").addEventListener('click', tofahrenheit)

function tocelsius() {
    const temp= document.querySelector('#convert').value
    const celsius  = (temp - 32) * 5/9
    document.querySelector("#result").innerText=`${celsius} Celsius`
    document.queryselector('#text').InnerText="Celsius"
  }



 function tofahrenheit() {
    const  temp= document.querySelector('#convert').value
    const fahrenheit = (temp * 9/5 )+ 32
    document.querySelector("#result").innerText=`${fahrenheit} Fahrenheit`
    document.queryselector('#text').InnerText="Fahrenheit"
   }
