import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const OrderCanceled = () => {
    return (
        <Container className="text-center mt-5">
            <Row>
                <Col>
                    <h1>Orden cancelada.</h1>
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

export default OrderCanceled;