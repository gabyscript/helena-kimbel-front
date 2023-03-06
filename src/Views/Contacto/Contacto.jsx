
import './Contacto.css';
import 'react-toastify/dist/ReactToastify.css';
import BarraNav from "../../Components/BarraNav/BarraNav";
import Footer from "../../Components/Footer/Footer";
import Toast from "../../Components/Toast/Toast"
import { validateFullName, validateEmail, validateMessage} from "../../Components/Validation/Validation";
import InlineError from '../../Components/InlineError/InlineError';
import {Form, Container, Button, Row, Col} from 'react-bootstrap';
import { useState, useEffect } from "react";
import {toast} from 'react-toastify';

import { sendEmail } from '../../API/httpMethods';

const Contacto= () => {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState();
    const [message, setMessage] = useState("");
    const [fullNameError, setFullNameError] = useState();
    const [emailError, setEmailError] = useState();
    const [messageError, setMessageError] = useState();
    const [send, setSend] = useState();

    useEffect(() => {
        
        window.scrollTo(0,0)

        validateFullName({fullName, setFullNameError});
        validateEmail({email, setEmailError});
        validateMessage({message, setMessageError});

        if (send) {
            toast.success(send.msg)
            setFullName("");
            setEmail("");
            setSubject(1);
            setMessage("");
            setSend()
        }
    }, [fullName, email, subject, message, send])

    const submitHandler = (e) => {

        e.preventDefault()
        if (!fullNameError & !emailError & !messageError) {
            sendEmail({fullName, email, subject, message, setSend})
        }
    }

    return (
        <>
            <BarraNav />
            <Container fluid className="d-flex flex-column justify-content-center " id="form-container">
                <Toast />
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <h5 className="fs-2 fw-bold pt-4">Contáctame</h5>
                        <hr className="pb-3"/>
                    </Col>
                </Row>
                <Form className="w-100 p-2">
                    <Form.Group  className="mb-2 d-flex flex-column justify-content-start align-items-start">
                        <p className="text-start fs-5 fw-semibold lh-1">Si deseas comprar una de mis obras, cotizar un proyecto a pedido, colaborar en un proyecto artístico o simplemente quieres saludar,
                        por favor no dudes en llenar el siguiente formulario de contacto. Estoy emocionada de conectarme contigo y hablar sobre cómo podemos crear algo único e inspirador juntos.</p>                        
                    </Form.Group>
                    <Form.Group  className="mb-4 d-flex flex-column justify-content-start align-items-start">
                        <Form.Label className="fw-bold fs-6 text-decoration-underline">Nombre completo</Form.Label>
                        <Form.Control type="text" placeholder="Tu nombre" onChange={(e) => {setFullName(e.target.value)}} value={fullName} ></Form.Control>
                        {fullNameError && <InlineError error={fullNameError} />}
                    </Form.Group>
                    <Form.Group  className="mb-4 d-flex flex-column justify-content-start align-items-start">
                        <Form.Label className="fw-bold fs-6 text-decoration-underline">Dirección de correo electrónico</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" onChange={(e) => {setEmail(e.target.value)}} value={email}></Form.Control>
                        {emailError && <InlineError error={emailError} />}
                    </Form.Group>
                    <Form.Group className="mb-4 d-flex flex-column justify-content-start align-items-start">
                        <Form.Label className="fw-bold fs-6 text-decoration-underline">Motivo de contacto</Form.Label>
                        <Form.Select onChange={(e) => {setSubject(e.target.value)}} value={subject}>
                            <option value="1">Seleccione una opción</option>                            
                            <option value="Compra de obra">Compra de obra</option>
                            <option value="Trabajo por comisión">Trabajo por comisión</option>
                            <option value="Invitación">Invitación</option>
                            <option value="Colaboración">Colaboración</option>
                            <option value="Otro">Otro</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-4 d-flex flex-column justify-content-start align-items-start">
                        <Form.Label className="fw-bold fs-6 text-decoration-underline">Descripción</Form.Label>
                        <Form.Control as="textarea" rows={8} onChange={(e) => {setMessage(e.target.value)}} value={message}></Form.Control>
                        {messageError && <InlineError error={messageError} />}
                    </Form.Group>
                    <Button variant="dark" size="lg" type="submit" onClick={submitHandler}>
                        Enviar formulario
                    </Button>
                </Form>
            </Container>
            <Footer />
            
        </>
        
    )
}

export default Contacto