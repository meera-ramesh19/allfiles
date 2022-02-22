

//When we need a reactive value that might changed at some point we use hooks called useState
// so we pass in an initial value and we output that value in the template 
//and we call the setfunction (line 45 and 46)the second value to update which triggers a rerender
//and the new value will be output in the browser in the template
import {useState} from 'react'

 const Home = () => {
     // when we need to change the value of name by clicking the button
     //to do that we need to use  state hooks as the name changes in the variable
     //but does not update in the template . so it doesn't trigger react to
     //render in the browser. We need to make the value reactive so that it
     //renders when we change the value. that is hooks in react
     //the hook is called useState.

       //let name='mario'
       //useState('mario') // is a function which we are invoking

     //we need to save the value so we can change the value
       const [name, setName]= useState('mario');
       const[age, setAge] =useState(25);

        const handleClick=()=>{
          //  name='luigi'
          setName('luigi');
          setAge(30);
        }
    
       
       return ( 
            <div className="home">
                <h2>Homepage</h2>
                <p>{name} is {age} years old</p>
                <button onClick={handleClick}>Click me</button>
                
            </div>
         );
    }

 
export default Home;