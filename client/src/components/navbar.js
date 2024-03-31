import { NavLink, useLocation } from 'react-router-dom'

const NavBar = () => {
  const location = useLocation()
  const path = location.pathname
  
  return (
    <nav className='navbar'>
      <ul className='linksList'>
        <li><NavLink to='/'><span className={path === '/' ? 'selected' : null}>Home</span></NavLink></li>
        <li><NavLink to='/about'><span className={path === '/about' ? 'selected' : null}>About</span></NavLink></li>
        <li><NavLink to='/process'><span className={path === '/process' ? 'selected' : null}>Process</span></NavLink></li>
        <li><NavLink to='/contact'><span className={path === '/contact' ? 'selected' : null}>Contact</span></NavLink></li>
      </ul>
    </nav>
  )
}

export default NavBar;