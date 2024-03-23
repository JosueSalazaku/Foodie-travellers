import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="w-screen h-20 flex flex-row">
      <ul className="w-screen flex flex-row justify-around items-center font-extrabold">
        <li><Link to="/">Logo</Link></li>
        <li><Link to="/Explore">Explore</Link></li>
        <div className='flex flex-row gap-5'>
        <li><Link to="/LogIn">Log In</Link></li>
        <li><Link to="/SignUp">Sign Up</Link></li>
        </div>
      </ul>
    </header>
  );
}

export default Header;
