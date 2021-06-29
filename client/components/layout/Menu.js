import { Nav, Navbar } from 'react-bootstrap'
import styles from './Menu.module.css'
import Image from 'next/image'
import logo from './logo.png'

const Menu = () => {
    return (
    <Navbar className={styles.menu} bg="dark" expand="lg">
    <Navbar.Brand href="#home"><Image src={logo} alt='restaurant logo'/></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/restaurants">Restaurants</Nav.Link>
        <Nav.Link href="/restaurants/new">Register a new restaurant</Nav.Link>
        <Nav.Link href="/login">Log in</Nav.Link>
        <Nav.Link href="/signup" className={styles.signup}>Sign up</Nav.Link>
        </Nav>
    </Navbar.Collapse>
    </Navbar>
)
}

export default Menu