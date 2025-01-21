import React, { useState, useEffect } from 'react';
import { Button, Modal, Table } from 'react-bootstrap';
import axios from 'axios';

const RateKMModal = () => {
    const [show, setShow] = useState(false);
    const [data, setData] = useState([]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const localRateData = [
        { id: 1, coverageRadius: 10, priceKM: 5 },
        { id: 2, coverageRadius: 20, priceKM: 4.5 },
        { id: 3, coverageRadius: 30, priceKM: 4 },
        { id: 4, coverageRadius: 40, priceKM: 3.5 },
        { id: 5, coverageRadius: 50, priceKM: 3 },
    ];

    useEffect(() => {
        if (show) {
            /*
            axios.get('/api/ratekm')
                .then(response => {
                    setData(response.data);
                })
                .catch(error => {
                    console.error('There was an error fetching the data!', error);
                });
            */
           setData(localRateData);
        }
    }, [show]);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Tasas por Km
            </Button>

            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Tasas por kilómetro</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Radio</th>
                                <th>Precio</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.coverageRadius}</td>
                                    <td>{item.priceKM}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default RateKMModal;