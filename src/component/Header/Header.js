import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import {Navbar, Nav} from 'react-bootstrap';
import {translate} from "react-switch-lang";
import "./Header.css"
import Logo from '../../img/Logotip.gif';


const Header = (props) => {

    const [{t}] = React.useState(props);

    return(
            <Navbar className='navbar' fixed="top" bg="" expand="sm" sticky="top" style={{backgroundColor:'#F5F5F5'}}>
            <Navbar.Brand href="#home">
            <img
                src={Logo}
                width="80"
                height="50"
                className="d-inline-block align-top"
                alt="Luxury logo"
             />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav variant="pills" className="justify-content-center">
                    <Nav.Item>
                    <Nav.Link className='nav-item' style={{color:'#9f8240'}}>
                    <Link 
                        activeClass="msactive"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                    {t('header.section1.title')}
                    </Link>
                    </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link className='nav-item' style={{color:'#9f8240'}}>
                    <Link
                        activeClass="msactive"
                        to="investition"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                    {t('header.section2.title')}
                    </Link>
                    </Nav.Link>
                    </Nav.Item>
                    
                    <Nav.Item>
                    <Nav.Link disabled className='nav-item' style={{color:'#9f8240'}}>
                    <Link
                        activeClass="msactive"
                        to="section3"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >{t('header.section3.title')}
                    </Link>
                    </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                    <Nav.Link disabled className='nav-item' style={{color:'#9f8240'}}>
                    <Link
                        activeClass="msactive"
                        to="section4"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >{t('header.section4.title')}
                    </Link>
                    </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                    <Nav.Link className='nav-item' style={{color:'#9f8240'}}>
                    <Link
                        activeClass="msactive"
                        to="kontact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >{t('header.section5.title')}
                    </Link>                    
                    </Nav.Link>
                    </Nav.Item>
                </Nav>
                
                </Navbar.Collapse>
            </Navbar>
    )
} 
export default translate(Header);

/**
</Navbar> <Nav  className="justify-content-center">
                        
                     <Link 
                            className="nav-item"
                            activeClass="msactive"
                            to="title"
                            spy={true}
                            href="#title"
                            smooth={true}
                            offset={-50}
                            duration={800}
                        >{t('header.section1.title')}
                        </Link>
                        <Link 
                            className="nav-item"
                            activeClass="msactive"
                            to="section2"
                            spy={true}
                            href="#section2"
                            smooth={true}
                            offset={-50}
                            duration={800}
                        >{t('header.section2.title')}
                        </Link>
                        <Link 
                            className="nav-item"
                            activeClass="msactive"
                            to="section3"
                            spy={true}
                            href="#section3"
                            smooth={true}
                            offset={-50}
                            duration={800}
                        >{t('header.section3.title')}
                        </Link>                        <Link 
                            className="nav-item"
                            activeClass="msactive"
                            to="title"
                            spy={true}
                            href="#title"
                            smooth={true}
                            offset={-50}
                            duration={800}
                        >{t('header.section4.title')}
                        </Link>
                        <Link 
                            className="nav-item"
                            activeClass="msactive"
                            to="kontact"
                            spy={true}
                            href="#kontact"
                            smooth={true}
                            offset={-50}
                            duration={800}
                        >{t('header.section5.title')}
                        </Link>
                        
                    </Nav>

 */