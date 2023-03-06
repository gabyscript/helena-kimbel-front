
import './Galeria.css';
import BarraNav from "../../Components/BarraNav/BarraNav";
import Footer from "../../Components/Footer/Footer";
import { Container, Row, Col, Card, Button} from "react-bootstrap";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import {IKContext, IKImage} from 'imagekitio-react';

import { GetObrasList } from '../../API/httpMethods';
import {MyPagination} from '../../Components/MyPagination/MyPagination'

const Galeria = () => {

    const [works, setWorks] = useState();
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState()
    const navigate = useNavigate();

    const [imgWidth, setImgWidth] = useState()

    /*const calcWidth = () => {
        if (window.innerWidth < 540 ) {
            setImgWidth(window.innerWidth*0.78)
            console.log(imgWidth)
        }
    }*/

    const handleChangePage = useCallback((page) => {
        setPage(page)
    }, [])
    
    useEffect(() => {

        //calcWidth()
        const fetchWorks = async () => {
            const res = await GetObrasList(page);
            setTotalPages(res.total)
            setWorks(res.data);
          }
          fetchWorks();
        window.scrollTo(0,0)
    }, [page])

    /*transformation={[{
        width: `${imgWidth}`
     }]}*/
    

    return (
        <>
            <BarraNav />
            <Container fluid id="gallery-container" className="pt-5 d-flex flex-column justify-content-center">
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <h5 className="fs-2 fw-bold pt-4">Mis obras</h5>
                        <hr className="pb-3"/>
                    </Col>
                </Row>
                <Row className="pb-5">
                    {works?.map((work, e) => 
                        <Col key={e} xs={12} sm={12} md={12} lg={4} xl={4} className="g-5">
                            <Card id="card" className="d-flex flex-column justify-content-around justify-content-center" >
                                <Container className="d-flex justify-content-center align-items-center">
                                    <IKContext urlEndpoint="https://ik.imagekit.io/gabyscript">
                                        <IKImage id="gallery-img" path={work.imagen}  
                                        loading="lazy"
                                        />
                                    </IKContext>                                    
                                </Container>                               
                                <Container >
                                    <h4 className="fw-bold">{work.nombre}</h4>
                                </Container>
                                <Container>
                                    <h5>Fecha de creación: {work.fecha} </h5>
                                    <h5>Valor: ${work.valor}</h5>
                                </Container>
                                <Container>
                                    <Button variant="dark" onClick={() => {navigate(`/galeria/${work.id}`)}}>Ver detalle</Button>
                                </Container>
                            </Card>
                        </Col>
                    )}
                </Row>
                <Row className="align-self-center">
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} >
                        
                        {totalPages > 1 && (
                            <MyPagination
                            total = {2}
                            current={page}
                            onChangePage={handleChangePage}
                            />
                        )}
                        
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
        
    )
}

export default Galeria