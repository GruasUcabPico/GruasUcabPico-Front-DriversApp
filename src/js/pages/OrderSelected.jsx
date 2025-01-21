import React from 'react';
import { Container, Row, Col, Card, Button, Table, Accordion } from 'react-bootstrap';
import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

import RateKMModal from '../components/ratekm/rateKMModal';
import AddExtraCostModal from '../components/extracost/addExtraCostModal';
import AlertCanceledOrder from '../components/alerts/alertCanceledOrder';

const OrderSelected = () => {

    const navigate = useNavigate();
    const { orderId } = useParams();
    console.log("yeah" + orderId);

    const order = {
        id: 1,
        contract: "Contract A",
        driverAssigned: "Driver 1",
        operator: "Operator 1",
        incidentLocationLat: 53.54992,
        incidentLocationLng: 10.00678,
        destinationLocationLat: 54.54992,
        destinationLocationLng: 10.10678,
        incidentDateTime: "2023-10-01T10:00:00Z",
        totalCost: 1000,
        extraCostApplied: 50,
        ratesPerKm: 5,
        orderStatus: "Pending"
    };

    const extraCosts = [
        { id: 1, name: 'Fuel Surcharge', price: 50, description: 'Additional fuel cost due to long distance' },
        { id: 2, name: 'Toll Charges', price: 20, description: 'Toll charges for highways' },
        { id: 3, name: 'Loading/Unloading', price: 30, description: 'Cost for loading and unloading the goods' }
    ];

    const handleCancel = () => {
        console.log('Order cancelled');
        navigate("/");
        return <AlertCanceledOrder />;
    };

    axios.get('http://localhost:2053/api/ExtraCost/GetExtraCosts')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // always executed
      }); 

      //axios get de los detalles de la orden

    return (
        <Container className="mt-2">
            <Row>
                <Col>
                    <Row>
                        <Col>
                            <Link to="/"><Button variant="light" ><span>&lt;</span></Button></Link>
                        </Col>
                        <Col>
                            <h2>Orden {orderId}</h2>
                        </Col>
                        <Col className="justify-content-md-end">
                            <RateKMModal />
                        </Col>
                    </Row>
                    <Row className="mt-2 justify-content-center">
                        <APIProvider apiKey={'AIzaSyCBZK2rXSKMDn9vM9d7f9LJ4G-MHwywJW4'}>
                            <Map
                            style={{width: '90%', height: '250px'}}
                            defaultCenter={{lat: order.incidentLocationLat, lng: order.incidentLocationLng}}
                            defaultZoom={6}
                            gestureHandling={'greedy'}
                            disableDefaultUI={true}>
                                <Marker position={{lat: order.incidentLocationLat, lng: order.incidentLocationLng}} label="Incident Location" />
                                <Marker position={{lat: order.destinationLocationLat, lng: order.destinationLocationLng}} label="Destination Location" />
                            </Map>
                        </APIProvider>
                    </Row>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col xs={10}><h2>Agregar costo extra</h2></Col>
                <Col xs={2}>
                    <AddExtraCostModal />
                </Col>
            </Row>
            <Row className="justify-content-center mt-1">
                {extraCosts.length > 0 ? (
                    <Table striped bordered hover style={{ width: "90%"}}>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Descripción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {extraCosts.map((cost) => (
                                <tr key={cost.id}>
                                    <td>{cost.name}</td>
                                    <td>{cost.price}</td>
                                    <td>{cost.description}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                ) : (
                    <p>Sin costos extra agregados</p>
                )}
            </Row>
            <Row>
                <Col>
                    <Button variant="success" onClick={() => navigate(`/orderInProgress/${orderId}`)}>Aceptar orden</Button>
                    <Button variant="danger" onClick={() => handleCancel()} className="ml-2">Cancelar orden</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default OrderSelected;