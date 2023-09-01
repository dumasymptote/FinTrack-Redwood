import { Link, routes } from '@redwoodjs/router'

import Navbar from 'src/components/Navbar/Navbar'

const AuthLayout = ({ children }) => {
  const navlinks = [
    { url: routes.dashboard(), text: 'Home' },
    { url: routes.home(), text: 'Settings' },
  ]
  const navItems = navlinks.map((navLink) => (
    <li key={navLink.text} className="nav-item">
      <Link
        to={navLink.url}
        className="flex items-center px-3 py-2 text-xs font-bold uppercase leading-snug text-slate-400 hover:opacity-75"
      >
        {navLink.text}
      </Link>
    </li>
  ))
  return (
    <>
      <Navbar navigationLinks={navItems}></Navbar>
      <main>{children}</main>
    </>
  )
}

export default AuthLayout
