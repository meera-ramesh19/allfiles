function decomp(n) {
    //Prime generation
    let primes = [], output = ""
    function checkPrime(n){
      for (let i = 2; i <= n / 2; i++){
        if (n % i == 0) return false
      }
      return true
    }
    for (let i = 2; i <= n; i++){
      if (checkPrime(i) == true) primes.push([i, 0])
    }
    
    //Applying Legendres Theorem and writing results to output
    //Source: https://janmr.com/blog/2010/10/prime-factors-of-factorial-numbers/
    for (let i = 0; i < primes.length; i++){
      for (let k = 1; k <= Math.floor(Math.log(n) / Math.log(primes[i][0])); k++){
        primes[i][1] += Math.floor(n / primes[i][0] ** k)
      }
     output += `${primes[i][0]}${primes[i][1] == 1 ? "" : `^${primes[i][1]}`}${i != primes.length - 1 ? " * " : ""}` 
    }
    return output
  }



//   mysolution not working for one case
//   function decomp(number) {
//     // your code
//   //let fact=1
  
//   let primeArr=[]
//   // for(let i=number;i>=2;i--){
//   //   fact=fact*(i)
//   // }
//   //   console.log('f:'+ fact)
//     // program to check if a number is prime or not
//   // let isPrime=true
  
//   function isPrime(n){
//     for(var j=2;j<n/2;j++){
//       if(n%j===0)  return false
//     }
//     return true
//   }
//    for(let k=2;k<=number;k++){
//      if(isPrime(k)){
//        primeArr.push(k)
//        }
//    }
  
//   console.log(primeArr)
    
//     let total=[];
//      for(let l=0; l<primeArr.length;l++){
//         let count=0
//   // //       let quot=fact/l
//   //       console.log('q:'+quot)
        
//         while(fact%primeArr[l]===0){
//            let quot=fact/primeArr[l]
//            count=count+1
//            fact=quot
           
//         }
//   //       console.log(primeArr,count,l)
    
        
//        if(count===1){
//           total.push(`${primeArr[l]}`)
//         }else if (count>1){total.push(`${primeArr[l]}^${count}`)}
       
      
       
//      }
  
//      console.log(total)
//       return total.join(" * ");
  
//   }  





















function decomp(number) {
    // your cod
  let fact=1
  
  let primeArr=[]
   for(let i=number;i>=2;i--){
     fact=fact*(i)
   }
  //   console.log('f:'+ fact)
    // program to check if a number is prime or not
  // let isPrime=true
  function isPrime(n){
    for(var j=2;j<n;j++){
      if(n%j===0)  return false
    }
    return true
  }
   for(let k=2;k<=number;k++){
     if(isPrime(k)){
       primeArr.push(k)
       }
   }
   let newArr=[]
  console.log(primeArr)
    
    let total=[];
     for(let l=0; l<primeArr.length;l++){
        let count=0
  // //       let quot=fact/l
  //       console.log('q:'+quot)
        
        while(fact%primeArr[l]===0){
           let quot=fact/primeArr[l]
           count=count+1
           fact=quot
           
        }
  //       console.log(primeArr,count,l)
        
       if(count===1){
          total.push(`${primeArr[l]}`)
        }else if (count>1){total.push(`${primeArr[l]}^${count}`)}
       
     }
  
     console.log(total)
      return total.join(" * ");
  
  }  