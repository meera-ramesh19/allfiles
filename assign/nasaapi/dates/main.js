const form = document.querySelector('#dates')
  
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const start_date = document.querySelector("#startDate")
    const end_date = document.querySelector("#endDate");
    const start=start_date.value;
    const end=end_date.value;
     console.log(start,end);
    // getPhotos(start,end);
});
  //Start of function to clear out data from input form
  
//   function clearField() {
//     document.querySelector("#startDate").value = ""
//     document.querySelector("#endDate").value = ""
//   }
  
//   async function getPhotos(start,end) {
//     // document.querySelector("#desc").innerHTML = ""
  
  
   
//     document.querySelector(
//     "#header"
//   ).innerHTML = `Dates Ranging from ${start_dates} through ${end_dates}`
  
//     const url =
//       "https://api.nasa.gov/planetary/apod?api_key=W8ituvMovkY92eRC3IWJwlJSxgmpeLHfMI6xbOfJ&start_date=" +
//       start +
//       "&end_date=" +
//       end;
//     console.log(url);
   
  
//     const res=await fetch(url)
//     const data= await res.json()
//     console.log(data);
//     }