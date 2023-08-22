import { Link, routes } from '@redwoodjs/router'
const UnauthLayout = ({ children }) => {
  return (
    <>
      <header>
        <nav className="">
          <ul>
            <li>
              <Link to={routes.home()}>Home</Link>
            </li>
            <li>
              <Link to={routes.login()}>Login</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default UnauthLayout
