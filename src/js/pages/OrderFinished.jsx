import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const OrderFinished = ({ ratePerKM, extraCosts, total }) => {
    return (
        <Container className="text-center mt-5">
            <Row>
                <Col>
                    <h1>¡Orden finalizada!</h1>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <h4>Factura</h4>
                    <p>Tarifa por KM: $3</p>
                    <p>Kms recorridos: 25</p>
                    <p>Costos extra: $30</p>
                    <p>Total: $105</p>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <Link to="/menu">
                        <Button variant="primary">
                            Volver al menú
                        </Button>
                </Link>
                </Col>
            </Row>
        </Container>
    );
};

export default OrderFinished;