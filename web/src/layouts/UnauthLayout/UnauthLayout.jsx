import { Link, routes } from '@redwoodjs/router'
const UnauthLayout = ({ children }) => {
  return (
    <>
      <header>
        <nav>
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
      <div>{children}</div>
    </>
  )
}

export default UnauthLayout
