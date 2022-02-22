
import {useState} from 'react';
import BlogList from './BlogList';

const Home = () => {
    //initial value of state  is an array of objects with a unique id to identify the 
    //output by react
    const [blogs, setBlogs] = useState([
      { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
      { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
      { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])
  
    //we need to cycle through the array in the template using js
    //each root template that we return must have  akey property
    //react uses to keep track of each item in the dom that outputs it
    //so we need to use a key item which is always the id and must be unique for each item

    return (
      <div className="home">
       <BlogList blogs={blogs} title='All Blogs'/>
       <BlogList blogs={blogs.filter((blog)=>blog.author==='mario')} title='All Blogs'/>
      </div>
    );
  }
    export default Home;