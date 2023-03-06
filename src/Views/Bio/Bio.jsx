
import './Bio.css';
import BarraNav from "../../Components/BarraNav/BarraNav";
import Footer from "../../Components/Footer/Footer";
import {Container, Row, Col, Image} from "react-bootstrap";
import { useEffect } from 'react';


const Bio = () => {
    
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    return (
        <>
            <BarraNav />
            <Container fluid id="bio-container" className="d-flex flex-column justify-content-center">
                <Row className="align-items-center">
                    
                    <Col xs={12} sm={12} md={12} lg={4} xl={{offset:1}} className="g-4">                        
                        <Image rounded src="/img/helena.jpeg" id="bio-image" />                          
                    </Col>                      
                                      
                    <Col xs={12} sm={12} md={12} lg={7} xl={6} className="g-5 d-flex flex-column justify-content-evenly align-items-center">
                        <p className="fs-5 lh-sm " id="presentation">Artista visual de nacionalidad chilena-europea residente en Santiago de Chile, enfocada en
                        la creación de obras plasmadas en canvas con un estilo inspirado entre la unión del
                        surrealismo y cubismo como base, sobre la cual se incorporan técnicas gráficas y
                        abstractas complementarias con el uso de diferentes medios materiales, siendo el resultado
                        obras de técnica mixta en las cuales predomina la pintura al óleo. </p>
                        <p className="fs-5 lh-sm " id="presentation"> Diplomada en maquillaje profesional de la academia MakeArt Studio, con dominio en
                            múltiples areas, siendo algunas de estas las de belleza , producción de
                            proyectos editoriales, organización y edición de fotografías de uso profesional,
                            caracterización teatral, cuerpos pintados y maquillaje de efectos especiales, incluyendo la
                            creación de prótesis personalizadas con especialización en la correcta manipulación de
                            diferentes materiales profesionales utilizados en la creación de obras audiovisuales. </p>
                        <p className="fs-5 lh-sm " id="presentation">  Actual estudiante en la carrera de Artes Visuales impartida por la universidad Diego Portales y
                            cursando paralelamente un diplomado honorario en Astronomía, oportunidad otorgada por
                            la misma entidad universitaria con el fin de incitar el crecimiento intelectual en los alumnos
                            con mejor rendimiento académico.
                        </p>
                    </Col>                    
                </Row>
            </Container>            
            <Footer />
        </>
        
    )
}

export default Bio