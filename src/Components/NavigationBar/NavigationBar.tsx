import { useContext } from 'react'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import { ThemeContext } from '../../App'

const style = {
  transition: 'background-color 0.5s'
}

type Props = {
  toggleTheme: ()=>void
}

function NavigationBar({ toggleTheme }: Props) {
  const theme = useContext(ThemeContext)
  const location = window.location.pathname
  return (
    <Navbar bg={theme.navbar_color} sticky="top" style={style}>
      <Container>
        <Navbar.Brand href="/" className={`text-${theme.text}`}>Kyle Tancio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href='/portfolio' className={`text-${theme.text} ${location.slice(1)==='portfolio'?'active':''}` }>Portfolio</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button variant={`outline-${theme.text}`} onClick={toggleTheme}>{theme.background.charAt(0).toUpperCase() + theme.background.slice(1)} Mode</Button>
      </Container>
    </Navbar>
  )
}

export default NavigationBar