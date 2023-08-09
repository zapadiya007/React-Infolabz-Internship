import Nav from 'react-bootstrap/Nav';
import Home from './Home';
// import App from './App';


function SecNav() {
    return (
        <Nav variant="tabs" defaultActiveKey="/news">
            <Nav.Item>
                <Nav.Link component={Home}>Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-4">Loooonger NavLink</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/news" >Inshorts News</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>Disabled</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default SecNav;