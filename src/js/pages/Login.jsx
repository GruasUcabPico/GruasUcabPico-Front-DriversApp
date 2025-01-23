import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import useSignIn from 'react-auth-kit/hooks/useSignIn';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {

    const signIn = useSignIn();
    const navigate = useNavigate();
    const handleSubmit = async (values) => {
        try {
            const response = await axios.post('http://localhost:9053/api/users/login', values);
            
            signIn({
              auth: {
                token: response.data.token,
              },
              userState: {name: values.email, uid: 123456}
            })
            navigate("/menu");
          } catch (error) {
            
            console.error('Error en login:', error);
          }
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Correo electrónico inválido').required('Ingresa tu correo electrónico'),
        password: Yup.string().required('Ingresa tu contraseña'),
    });

    return (
        <Container>
            <Row className="justify-content-md-center align-items-center" style={{ height: '100vh' }}>
                <Col md={6}>
                    <h2 className="text-center"><strong>UCABGruero</strong></h2>
                    <Formik
                        initialValues={{ email: '', password: '' }}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ handleSubmit, handleChange, values, touched, errors }) => (
                            <Form noValidate onSubmit={handleSubmit}>
                                <Form.Group className="p-2" controlId="formBasicEmail">
                                    <Form.Control
                                        type="email"
                                        placeholder="Dirección de correo elctrónico"
                                        name="email"
                                        value={values.email}
                                        onChange={handleChange}
                                        isInvalid={touched.email && !!errors.email}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.email}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="p-2" controlId="formBasicPassword">
                                    <Form.Control
                                        type="password"
                                        placeholder="Contraseña"
                                        name="password"
                                        value={values.password}
                                        onChange={handleChange}
                                        isInvalid={touched.password && !!errors.password}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.password}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Button variant="primary" type="submit" className="mx-auto" style={{ width: "200px" }}>
                                    Iniciar sesión
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;

/*
import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Login = () => {
    return (
        <Container>
            <Row className="justify-content-md-center align-items-center" style={{ height: '100vh' }}>
                <Col md={6}>
                    <h2 className="text-center"><strong>UCABGruero</strong></h2>
                    <Form>
                        <Form.Group className="p-2" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Dirección de correo electrónico" />
                        </Form.Group>

                        <Form.Group className="p-2" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Contraseña" />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="mx-auto" style={{ width: "200px" }}>
                            Iniciar sesión
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
*/