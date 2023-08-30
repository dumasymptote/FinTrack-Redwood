import {
  Menu,
  Center,
  Header,
  Container,
  Group,
  Button,
  Burger,
  rem,
  createStyles,
} from '@mantine/core'

import { Link, routes } from '@redwoodjs/router'
const UnauthLayout = ({ children }) => {
  return (
    <>
      <header>
        <nav className="bg-white border-gray-200">
          <div className='max-w-screen-xl flex items-center justify-between mx-auto p-4'>
            <a href="https://fintrack.dumasymptote.com" className='flex items-center'>
              <span>Fin Track</span>
            </a>
            <div className='flex md:order-2'>
              <button type='button' className='text-white bg-blue-700 hover:to-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Dumasymptote(dot)com</button>
            </div>
            <div className='items-center justify-between hidden w-full md:flex md:w-auto mdLorder-1'>
              <ul className='flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
                <li>
                  <Link className='block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500' to={routes.home()}>Home</Link>
                </li>
                <li>
                  <Link className='block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500' to={routes.login()}>Login</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default UnauthLayout
