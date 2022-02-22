function firstAndLastChars(str){

    const len=str.length
    const chars=(len <=2)?null:str.slice(1,len-1)
    console.log(chars)
    return chars
}

console.log(firstAndLastChars('helloWorld'))