//type sfc and tab to get the stateless component 

// const Navbar = () => {
//     return ( 
//           <nav className="navbar">
//               <h1>Meera's Blog</h1>
//               <div className="links">
//                   <a href="/">Home</a>
//inline styling is done like this in react components
//                   <a href="/create" style={{ 
//                       color:"white",
//                         backgroundColor:'#f1356d',
//                         borderRaius:'8px'

//                       }
//                   }> New Blog</a>
//               </div>
//           </nav>

//      );
// }
const Navbar = () => {
        return ( 
              <nav className="navbar">
                  <h1>Meera's Blog</h1>
                  <div className="links">
                      <a href="/">Home</a>
                      <a href="/create" style={{ 
                         
    
                          }
                      }> New Blog</a>
                  </div>
              </nav>
    
         );
    }
//  The lines 8 and 9 are for routing
export default Navbar;

//{} represents dynamic value which has the key value pairs