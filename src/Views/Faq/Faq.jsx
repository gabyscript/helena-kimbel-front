
import './Faq.css';
import BarraNav from '../../Components/BarraNav/BarraNav';
import Footer from '../../Components/Footer/Footer';
import {Container, Accordion, Row, Col} from 'react-bootstrap';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Faq = () => {

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    return (

        <>
            <BarraNav/>
            <Container fluid id="faq-container" className="d-flex flex-column justify-content-center">
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <h4 className="fs-1 fw-bolder">FAQ: Preguntas frecuentes</h4>
                        <hr className="pb-3"/>
                    </Col>
                </Row>
                
                <Accordion flush defaultActiveKey="0" className="px-2">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>¿Cómo pedir una obra personalizada?</Accordion.Header>
                        <Accordion.Body>
                            Si estás interesado en solicitar una obra personalizada de Helena, por favor sigue los siguientes pasos:
                            <li>Dirígete a la sección de <NavLink to="/contacto" className="fw-bold">Contacto</NavLink>, llena el formulario para ponerte en contacto con nosotros.</li>
                            <li>Especifica el tipo de obra que te gustaría encargar, así como el tamaño, estilo o referencia según tu elección.</li>
                            <li>También puedes proporcionarnos información adicional, como el propósito de la obra o cualquier idea que tengas en mente.</li>
                            <li>Una vez recibida la solicitud, te enviaremos una cotización y, si estás de acuerdo, comenzaremos a trabajar en tu obra personalizada.</li>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>¿Cuál es el plazo de entrega de una obra personalizada?</Accordion.Header>
                        <Accordion.Body>
                            Los plazos de entrega varían según los requerimientos que pida la obra, como lo puede ser el tamaño, la técnica requerida, los materiales utilizados, entre 
                            otros factores. Este plazo se tratará directamente con el comprador en la cotización según las necesidades e ideas propuestas. Aún así, contamos con un tiempo 
                            estimado es entre 1 a 3 meses desde la fecha de inicio hasta la entrega de la obra.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>¿Cuáles son los valores de las obras?</Accordion.Header>
                        <Accordion.Body>
                            El precio de las obras se basa en varios factores, como el tamaño, la técnica, los materiales, etc.
                            Para obtener información detallada de los precios de cada obra, visite nuestra<NavLink to="/galeria"> galería </NavLink>, cada obra de nuestro catálogo
                            tiene su valor indicado en sus detalles.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>¿De qué forma puedo apoyar el trabajo de Helena?</Accordion.Header>
                        <Accordion.Body>
                            Además de las compras o la realización de obras a pedido, puedes apoyar a Helena siguiendo sus redes sociales y compartiendo sus publicaciones o historias
                            en ellas. En sus redes subirá avances de sus obras como también obras completamente nuevas (que a futuro, podría ser tuya). Compartiendo sus publicaciones
                            ayudarás mucho a la difusión y masificación de su gran trabajo.
                            <p>Únete a sus redes sociales, las cuales podrás encontrar a continuación :</p>
                            <li><a href="https://www.instagram.com/effyntrm/" target="__BLANK">
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/profile.php?id=100084053466756&mibextid=ZbWKwL" target="__BLANK">
                                    Facebook
                                </a>
                            </li> 
                            <li>
                                <a href="https://www.twitch.tv/effntrm" target="__BLANK"> 
                                    Twitch
                                </a> 
                            </li>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
            <Footer />
        </>
    
    )
}

export default Faq;