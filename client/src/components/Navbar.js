import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="name">A Blog Site</Link>
      <Link to="/create" className="create-button">New Post</Link>
    </nav>
  );
}
 
export default Navbar;