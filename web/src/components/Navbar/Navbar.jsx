import { useState } from 'react'

import { Link, routes } from '@redwoodjs/router'
const Navbar = () => {
  const navlinks = [
    { url: routes.home(), text: 'Home' },
    { url: routes.login(), text: 'Login' },
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
  const [navbarOpen, setNavbarOpen] = useState(false)
  return (
    <>
      <nav className="relative mb-3 flex flex-wrap items-center justify-between bg-slate-800 px-2 py-3">
        <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
          <div className="relative flex w-full justify-between lg:static lg:block lg:w-auto lg:justify-start">
            <Link
              className="mr-4 inline-block whitespace-nowrap py-2 text-sm font-bold uppercase leading-relaxed text-slate-400"
              to={routes.home()}
            >
              fintracker(at)dumasymptote
            </Link>
            <button
              className="block cursor-pointer rounded border border-solid border-transparent bg-transparent px-3 py-1 text-xl leading-none text-slate-400 outline-none focus:outline-none lg:hidden"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
                className="fill-slate-400"
              >
                <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
              </svg>
            </button>
          </div>
          <div
            className={
              'flex-grow items-center lg:flex' +
              (navbarOpen ? ' flex' : ' hidden')
            }
            id="navbar"
          >
            <ul className="flex list-none flex-col lg:ml-auto lg:flex-row">
              {navItems}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
