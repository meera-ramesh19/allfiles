
//import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  //root component.there is a component tree where the 
  //other components which could be nested inside these
  //and then more componenets nested in them
  
  const title="Welcome to the new blog"
  const likes=50;
  const link="https://www.google.com";
  //we cant output booleans or objects in the component 
  //using varaibles and everything is converted into a string
  //output the value of the variable inside the template
  //in h1
  //dynamic values can be used in jsx directly as shown in line18-21
  // we can also use these dynamic values as attribute values in element tags 
 //we import the navbar and nest it in the JSX
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Home/>
        <h1>{title}</h1>
        <p> Liked {likes} times</p>
        <p>{"hello,ninjas"}</p>
        <p> {[1,2,3,4,5]}</p>
        <p>Math.random()*10</p>
        <a href={link}>Google</a>
      </div>
    </div>
  );
}
//to use in our files we export the function
//component is a function and always return something whihc
// is the JSX template and then we export it to use the function
export default App;

//Acomponent is jsut a function which returns a JSX tempplate 
//which is exported at the bottom of the file