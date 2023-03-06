
import './Obra.css';
import BarraNav from "../../Components/BarraNav/BarraNav";
import Footer from "../../Components/Footer/Footer";
import {useState, useEffect} from 'react'
import { Container, Row, Col,Image, Card, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { GetObrasId } from "../../API/httpMethods";
import {IKContext, IKImage} from 'imagekitio-react';

const Obra = () => {

    const {id} = useParams();
    const navigate = useNavigate();

    const [work, setWork] = useState([]);

    useEffect(() => {
        const fetchWork = async () => {
            const data = await GetObrasId(id);
            setWork([data])
          }
          fetchWork();
        window.scrollTo(0,0)
    }, [    ])

    return (
        <>
            <BarraNav />     
            <Container fluid className="min-vh-100 d-flex flex-column justify-content-center" id="obra-container">           
            {work.map(w => {
                    return (
                        <Container key={w.id}>
                            <Row>
                                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <h2 className="fs-2 fw-bold pt-4">{w.nombre}</h2>
                                    <hr className="pb-3"/>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} sm={12} md={12} lg={6} xl={6} className="mb-5">
                                    <Card className="d-flex justify-content-center align-items-center" id="obra-card-img">
                                        <IKContext urlEndpoint="https://ik.imagekit.io/gabyscript">
                                            <IKImage id="work-img" path={w.imagen}  
                                            
                                            />
                                        </IKContext>    
                                    </Card>
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={6} xl={6} className="d-flex flex-column justify-content-evenly align-items-center">
                                    <Container >
                                        <Card id="obra-card-info" className="d-flex flex-column justify-content-evenly align-items-center">
                                            <Card.Text>{w.categoria}</Card.Text>
                                            <Card.Text>{w.subcategoria}</Card.Text>
                                            <Card.Text>{w.tecnica}</Card.Text>
                                            <Card.Text>{w.fecha}</Card.Text>
                                            <Card.Text>{w.medidas}</Card.Text>
                                            <Card.Text>{w.materiales}</Card.Text>
                                            <Card.Text>{w.valor}</Card.Text>
                                            <Card.Text>{w.descrip} </Card.Text>
                                            <Container>
                                                <Button variant="dark" onClick={() => {navigate(`/galeria`)}}>Volver a galería</Button>
                                            </Container>
                                        </Card>
                                    </Container>
                                </Col>
                            </Row>
                        </Container>
                    )
                })}
                    
            </Container>
            
            <Footer />
        </>
        
    )
}

export default Obra