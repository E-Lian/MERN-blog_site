
const Navbar = () => {
  // TODO: see if we can change the redirection for it to use react-router-dom
  return (
    <nav className="navbar">
      <a href="/" className="name">A Blog Site</a>
      <a href="/create" className="create-button">New Blog</a>
    </nav>
  );
}
 
export default Navbar;