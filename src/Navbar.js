import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
       <nav className="navbar">
           <h1>The Antonina Line Website</h1>
           <div className="links">
               <Link to="/">Home</Link>
               <Link to="/create">Add Passenger</Link>
           </div>
       </nav>
      );
}
 
export default Navbar;