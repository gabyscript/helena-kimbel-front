
import {Container, Image} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';

import './landingPage.css'


const LandingPage = () => {

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    return (
        
        <Container fluid className="d-flex flex-column justify-content-evenly align-items-center" id="landing-container"> 
            <Container>
                <h1 className="title-text"> HELENA KIMBELL</h1>
                <h3 className='subtitle-text'>Artista Visual</h3>
            </Container>
            <Container className="mb-3">
                <Image roundedCircle className="landing-image" src="/img/helena.jpeg"  />
            </Container>            
            <Container className="mb-3 d-flex flex-row justify-content-between align-items-center" id="socials-buttons-container">  
                <a href="https://www.instagram.com/effyntrm/" target="__BLANK">
                    <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" color="white" id="icons"/>
                </a> 
                <a href="https://www.facebook.com/profile.php?id=100084053466756&mibextid=ZbWKwL" target="__BLANK">
                    <FontAwesomeIcon icon={['fab', 'facebook']} size="2x" color="white" id="icons"/>
                </a>
                <a href="https://www.twitch.tv/effntrm" target="__BLANK"> 
                    <FontAwesomeIcon icon={['fab', 'twitch']} size="2x" color="white" id="icons"/>
                </a>                                               
            </Container>
            <Container fluid className="d-flex flex-column justify-content-evenly align-items-center" id="links-container" >                
                <NavLink id="page-links" className="mb-2" to="/bio">                        
                    BIO
                </NavLink>               
                <NavLink id="page-links" className="mb-2" to="/galeria">
                    GALERÍA
                </NavLink>
                <NavLink id="page-links" className="mb-2" to="/contacto">
                    CONTACTO
                </NavLink>
                <NavLink id="page-links" className="mb-2" to="/faq">
                    FAQ
                </NavLink>                       
            </Container>
                
        </Container>           
        
    )
}

export default LandingPage