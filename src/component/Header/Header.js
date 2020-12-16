import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import { withStyles } from '@material-ui/core/styles';
import {Navbar, Nav, Form} from 'react-bootstrap';
import {getLanguage, setLanguage, translate} from "react-switch-lang";
import "./Header.css"
import Logo from '../../img/Logotip.gif';
import {Switch , FormControlLabel, FormGroup} from '@material-ui/core';


const IOSSwitch  = withStyles((theme)=>({
    root: {
        width: 42,
        height: 26,
        padding: 0,
        margin: theme.spacing(1),
      },
      switchBase: {
        padding: 1,
        '&$checked': {
          transform: 'translateX(16px)',
          color: theme.palette.common.white,
          '& + $track': {
            backgroundColor: '#9f8240',
            opacity: 1,
            border: 'none',
          },
        },
        '&$focusVisible $thumb': {
          color: '#9f8240',
          border: '6px solid #fff',
        },
      },
      thumb: {
        width: 24,
        height: 24,
      },
      track: {
        borderRadius: 26 / 2,
        border: `1px solid ${theme.palette.grey[400]}`,
        backgroundColor: theme.palette.grey[50],
        opacity: 1,
        transition: theme.transitions.create(['background-color', 'border']),
      },
      checked: {},
      focusVisible: {}
  }))(Switch);


const Header = (props) => {
    const [lang, setLang] = React.useState(true);

const handleClickLang = (event) =>{
    //event.currentTarget.checked);
    if (event.currentTarget.checked) {setLanguage('pl') }else {setLanguage('en')}
    setLang(event.currentTarget.checked)
}

    const [{t}] = React.useState(props);

    return(
            <Navbar className='navbar' fixed="top" expand="sm" sticky="top" style={{backgroundColor:'#F5F5F5'}}>
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
                <Nav  className="mr-auto">
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
                <Nav fl>
                <Form>
                    <FormGroup>
                            <FormControlLabel
                                control={<IOSSwitch  checked={lang} onChange={handleClickLang} name="Langauge" />}
                                label={getLanguage().toUpperCase()}
                            />
                    </FormGroup>  
                </Form>
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