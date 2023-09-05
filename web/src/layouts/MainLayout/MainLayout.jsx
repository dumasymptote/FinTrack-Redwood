import { Link, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'
import Navbar from 'src/components/Navbar/Navbar'
const MainLayout = ({ children }) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  const navlinks = isAuthenticated
    ? [
        { url: routes.dashboard(), text: 'Dashboard' },
        { url: routes.dashboard(), text: currentUser.email },
        { url: routes.home(), text: 'Logout' },
      ]
    : [
        { url: routes.home(), text: 'Home' },
        { url: routes.login(), text: 'Login' },
      ]
  const navItems = navlinks.map((navLink) => (
    <li key={navLink.text} className="nav-item">
      <Link
        to={navLink.url}
        onClick={navLink.text == 'Logout' ? logOut : ''}
        className="flex items-center px-3 py-2 text-xs font-bold uppercase leading-snug text-slate-400 hover:opacity-75"
      >
        {navLink.text}
      </Link>
    </li>
  ))
  return (
    <>
      <header>
        <Navbar navigationLinks={navItems} />
      </header>
      <main>{children}</main>
    </>
  )
}

export default MainLayout
