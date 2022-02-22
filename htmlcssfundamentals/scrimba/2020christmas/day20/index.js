

function namingDomains(arr){
  let domainArr={}
  let str=''
  const newArr=arr.map(function(item,index,arr){
    // console.log(item,item.length)
    // let first=item.indexOf('.')
    let last=item.lastIndexOf('.')
      //  console.log(last)
       const str=item.slice(last+1)
      return (str==='org')?'organization':
              (str==='com')?'commercial':
              (str==='net')?'network':
              (str==='info')?'information':''
  });
  
  return newArr
}
  


let domains=["en.wiki.org", "codefights.com", "happy.net", "code.info"]
const domainTypes=namingDomains(domains)
console.log(domains,domainTypes)
