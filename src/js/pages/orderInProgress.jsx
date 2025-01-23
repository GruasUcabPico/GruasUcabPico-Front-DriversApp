import React from 'react';
import { Container, Row, Col, Button, Spinner } from 'react-bootstrap';
import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';
import { Link, useNavigate, useParams } from 'react-router-dom';

const OrderInProgress = () => {
    
        const navigate = useNavigate();
        const { orderId } = useParams();

        const order = {
            id: 1,
            contract: "Contract A",
            driverAssigned: "Driver 1",
            operator: "Operator 1",
            startLocationLat: 10.4627,
            startLocationLng: -66.9759,
            incidentLocationLat: 10.4527,
            incidentLocationLng: -66.9059,
            destinationLocationLat: 10.4833,
            destinationLocationLng: -66.8666,
            incidentDateTime: "2023-10-01T10:00:00Z",
            totalCost: 1000,
            extraCostApplied: 50,
            ratesPerKm: 5,
            orderStatus: "Pending"
        };
    
    return (
        <Container className="text-center mt-5">
            <Row className="justify-content-center">
                <APIProvider apiKey={'AIzaSyCBZK2rXSKMDn9vM9d7f9LJ4G-MHwywJW4'}>
                    <Map
                    style={{width: '90%', height: '250px'}}
                    defaultCenter={{lat: (order.startLocationLat + order.destinationLocationLat)/2, lng: (order.startLocationLng + order.destinationLocationLng)/2}}
                    defaultZoom={12}
                    gestureHandling={'greedy'}
                    disableDefaultUI={true}>
                        <Marker position={{lat: order.startLocationLat, lng: order.startLocationLng}} label="Punto de partida" />
                        <Marker position={{lat: order.incidentLocationLat, lng: order.incidentLocationLng}} label="Punto del incidente" />
                        <Marker position={{lat: order.destinationLocationLat, lng: order.destinationLocationLng}} label="Punto de llegada" />
                    </Map>
                </APIProvider>
            </Row>
            <Row>
                <Col>
                    <h3 className="mt-3">Orden {orderId} en progreso</h3>
                    <Spinner animation="border" role="status">
                        <span className="sr-only"></span>
                    </Spinner>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col>
                    <Link to={`/orderFinished/${order.id}`}><Button variant="success">Finalizar orden</Button></Link>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col>
                    <Link to={`/orderCanceled/${order.id}`}><Button variant="danger">Cancelar orden</Button></Link>
                </Col>
            </Row>
        </Container>
    );
};

export default OrderInProgress;