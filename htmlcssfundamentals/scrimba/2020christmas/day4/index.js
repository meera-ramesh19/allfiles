

function centuryFromYear(year){
    let century=0
    const centur=Math.floor(year/100)
  
    if(year%100 !==0){
        century = centur+1
    }else {
        century=centur
    }
    console.log(centur,century)
    return century
}
const num=centuryFromYear(1900)
console.log(num)
