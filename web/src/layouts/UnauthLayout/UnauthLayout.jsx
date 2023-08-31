import Navbar from 'src/components/Navbar/Navbar'

const UnauthLayout = ({ children }) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
    </>
  )
}

export default UnauthLayout
