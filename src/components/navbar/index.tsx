import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Form, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import './style.scss';

export default function NavBar()
{
    return (
        <Navbar variant="light" className="ui-navbar">
            <Navbar.Brand className="ui-navbar-brand">
                Simple Store
            </Navbar.Brand>
            <Nav className="mr-auto">
                <Link className="nav-link" to="/">
                    Produtos
                </Link>
            </Nav>
            <Form inline>
                <Link className="nav-link" to="/cart">
                    <FontAwesomeIcon color="#343a40" icon={faShoppingCart} />
                </Link>
            </Form>
        </Navbar>
    );
}