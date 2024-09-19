import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Outlet, Link } from 'react-router-dom';

const Bar = () => {
    return (
        <>
        <Container fluid>
            <Row>
                <Col><Link to ="/Home">Hotel Dicers</Link></Col>
                <Col><Link to ="/Login">Login</Link></Col>
                <Col><Link to ="/Register">Register</Link></Col>
                <Col><Link to ="/Admin">Admin</Link></Col>
            </Row>
        </Container>
        

        <Outlet />
        </>
    )
}

export default Bar;