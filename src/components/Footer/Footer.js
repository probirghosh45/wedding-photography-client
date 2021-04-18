import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import React from 'react';

import FooterCol from '../FooterCol/FooterCol';

const Footer = () => {
    const noNamed = [
        {name: `https://i.ibb.co/XFhHPTT/Logo-Makr-0-NRhu4.png`},
        {name: "You & Me - Wedding Agency"}
    ]
    const contact = [
        {name: "Email: hello@probirghosh.com"},
        {name: "Phone: +88-01924-565614"}
       
       
    ]

    // <img style={{ height: '80px' }} src={`https://i.ibb.co/XFhHPTT/Logo-Makr-0-NRhu4.png`} alt="you-and-me-logo" />
    const tags = [
        {name: "Best Wedding Photographer, Wedding Photographer Delhi, Candid wedding photographer delhi, Top 10 wedding photographer, Wedding Photographer, Modern Wedding Photographer, Documentary Wedding Photographer, Wedding Films, Wedding Cinematographer "},
    
    ]
    const ourServices = [
        {name: "You & Me-Wedding Agency is a boutique wedding photography studio in New Delhi, India. We make modern wedding stories. Are you going to be our next muse?" }
    
    
    ]    
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                   {/* <img style={{ height: '80px' }} src={`https://i.ibb.co/XFhHPTT/Logo-Makr-0-NRhu4.png`} alt="you-and-me-logo" /> */}
                    <FooterCol key={1} menuTitle={"SITE LOGO"} menuItems={noNamed} />
                    <FooterCol key={2} menuTitle="MODERN WEDDING PHOTOGRAPHY" menuItems={ourServices}/>
                    <FooterCol key={3} menuTitle="TAGS" menuItems={tags}/>
                    <FooterCol key={4} menuTitle="CONTACT" menuItems={contact}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                     
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>© Copyright  2017-{(new Date()).getFullYear()} All Rights Reserved || <span className='text-success' > <a href="https://www.facebook.com/Probiirghosh" target="_blank">Probir Ghosh</a> </span></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;