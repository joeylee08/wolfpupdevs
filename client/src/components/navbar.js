import { NavLink } from 'react-router-dom'

const NavBar = () => {
  
  return (
    <nav className='navbar'>
      <ul className='linksList'>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/process'>Process</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
      </ul>
    </nav>
  )
}

export default NavBar;