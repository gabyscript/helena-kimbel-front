
import './Footer.css';
import { Container, Row, Col } from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


const Footer = () => {

    return(
        <>
            <Container fluid className="bg-dark d-flex flex-row justify-content-evenly align-items-center" id="footer">
                <Container></Container>
                <Container></Container>
                <Container></Container>
                <Container className="bg-dark d-flex flex-row justify-content-evenly align-items-center">
                    <a href="https://www.instagram.com" target="__BLANK">
                        <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" color="white" fixedWidth/>
                    </a> 
                    <a href="https://www.facebook.com" target="__BLANK">
                        <FontAwesomeIcon icon={['fab', 'facebook']} size="2x" color="white" />
                    </a>
                    <a href="https://www.twitch.tv" target="__BLANK"> 
                        <FontAwesomeIcon icon={['fab', 'twitch']} size="2x" color="white" />
                    </a>                     
                </Container>            
            </Container>
            <Container fluid className="bg-dark d-flex flex-column justify-content-center align-items-center" id="info-footer">
                <h6 className="text-white"> Derechos Reservados 2023 - Helena Kimbel</h6>
                <h6 className="text-white"> Página por GabyScript</h6>
            </Container>
        </>
        
        
    )
}

export default Footer;