// function balance(book) {
//     let others=['!','=',':','::']
//     // your code
//     // Please use .toFixed(2) to format numbers
//     book=book.split('\n')
//   //   console.log(book)
//     const results=book.map((items,index)=>{
//   //     return items.split(' ').map(item=>{
//          return items.split('').filter(val=>{
//                 return !others.includes(val)  
                
//            }).join('')
//   //   }).join(' ')
//     })
    
//     console.log(results)
  
  
//    const answer=results.filter(result=>{ return result!==''}).join(' ')
//    console.log(answer)




   function balance(book) {
    let numbers=0,expense=0
    let category=''
    
    
    let others=['!','=',':','::']
  
   
    const cleanedbook=book.split('\n').map((items,index)=>{
         return items.split('').filter(val=>{
                return !others.includes(val)  
         }).join('')
    })
  //    console.log(cleanedbook)
    
    // skip all non A-Za-z0-9\s\. caracters, globally, multiline, and case insensitive
    let results = book.replace(/[^A-Za-z0-9\s\.]/gmi, '')
    results=results.split('\n')
  
    const answer=cleanedbook.filter(result=>{return result!==''})
    let original=total=parseFloat(answer.shift());
   
    const linesProcessed = answer.map((line,index) => {
     
        const [numbers, category, expense] = line.split(' ')
         
        original=(original-expense).toFixed(2)
       return `${numbers} ${category} ${expense} Balance ${original}\r\n`;
      
   }).join('\n')


   const returnVal= `Original Balance: ${total.toFixed(2)} 
    ${linesProcessed} 
    Total_expense ${(total-original).toFixed(2)} 
    Average_expense ${((total-original)/answer.length).toFixed(2)}`

   return returnVal
  }

//   the above code works except for display.for display purpose refer to this and push to an array 
//   https://dev.to/thepracticaldev/daily-challenge-4-checkbook-balancing-hei
//   https://www.codewars.com/kata/59d727d40e8c9dd2dd00009f/solutions