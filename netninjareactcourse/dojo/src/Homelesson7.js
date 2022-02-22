

//sfc and tqb for stateless components
//lesson 7 using click events 
// const Home = () => {
//     //fire a function when the user clicks the butto click me
//     //eevents can always be accessed in a function within the components
//     const handleClick=(e)=>{
//         console.log('Hello ,Ninjas',e)
//     }

//     const handleClickAgain =(name,e)=>{
//         console.log('hello'+ name, e.target)
//     }
//     //we create a function and assign it to an element and fires it  when user cli
//    //the function
//    //how to pass an argument in the function, we wrap it inside an anonymous function
//     return ( 
//         <div className="home">
//             <h2>Homepage</h2>
//             <button onClick={handleClick}>Click me</button>
//             <button onClick = {(e) =>handleClickAgain('mario',e)}>Click me again</button>
//         </div>
//      );
// }

 
export default Home;