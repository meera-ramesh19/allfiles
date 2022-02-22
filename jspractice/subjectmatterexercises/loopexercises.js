const capitals = {
    a: "A", b: "B", c: "C", d: "D",
    e: "E", f: "F", g: "G", h: "H",
    i: "I", j: "J", k: "K", l: "L",
    m: "M", n: "N", o: "O", p: "P",
    q: "Q", r: "R", s: "S", t: "T",
    u: "U", v: "V", w: "W", x: "X",
    y: "Y", z: "Z",
  }
  
  // TODO: Fix this broken function
  
  
  //hello
  function capitalize(str) {
    console.log(str)
    let result = ""
    let upper='';
    for (let i = 0; i < str.length; i += 1) {
      result += capitals[str[i]].toUpperCase()
      
    }
    return result
  }
  
  console.log(capitalize("hello"))// want: HELLO
  
  // BONUS CHALLENGE:
  // fix the capitalize function so that it works for the following example:
  
  // capitalize("Hello Abdur-Rahman") // want: HELLO ABDUR-RAHMAN
  //ABdur rahman
  function capitalize(str) {
    // console.log(str)
    let result = ""
    for (let i = 0; i < str.length; i += 1) {
        if(str[i] === str[i].toUpperCase()){
           result+=str[i]}
       else if(str[i]=== str[i].toLowerCase()){
      result += capitals[str[i]].toUpperCase()
       }else{
         result+=str[i]
       }
    } 
    return result
  }
  
  console.log(capitalize("Hello Abdur-Rahman")) 
  
  
  // TODO: Fix this broken function.
  // This function should log out only the even numbers inside an array
  function skipOdds(nums) {
    let even=[]
    for (let i = 0; i < nums.length; i += 1) {
      if (nums[i] % 2 === 0) {
        even.push(nums[i])
      }
    
    }
    return even
  }
  
  console.log(skipOdds([5, 4, 2, 7])) // want to log: 4, 2