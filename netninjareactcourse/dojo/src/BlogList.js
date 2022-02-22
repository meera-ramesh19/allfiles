// const  BlogList= (props) => {
//     //props are used to pass the data from parent to child components
//     const blogs=props.blogs
//     const title=props.title;

//Array destructuring can be used instead of props here and 
//written as
const BlogList=({blogs,title}) =>{

    return (  
      <div className="blog-list">
          <h2>{title}</h2>
        {blogs.map(blog => (
            <div className="blog-preview" key={blog.id} >
              <h2>{ blog.title }</h2>
              <p>Written by { blog.author }</p>
            </div>
          ))}
          </div>
    );
}
 
export default BlogList;