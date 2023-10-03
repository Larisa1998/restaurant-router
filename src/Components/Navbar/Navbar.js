import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='d-flex justify-content-between align-items-center px-5 py-3'>
        <h4>Logo</h4>
        <ul className='d-flex'>
            <li className='me-5'><a href='/'>Home</a></li>
            <li><a href='/menu'>Menu</a></li>
        </ul>
    </nav>
  );
}

export default Navbar;
