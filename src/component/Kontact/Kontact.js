import React from 'react'
import {Container} from 'react-bootstrap';
import {translate} from "react-switch-lang";

import dummyText from '../../DummyText'
import './Kontact.css';


const Kontact = (props) => {

    const [{t}] = React.useState(props);
    
    return (
        <Container className='kontact'>
            <h2 align="center">{t('header.section5.title')}</h2>
            <p align="justify">{dummyText}</p>
            <p align="justify">{dummyText}</p>
        </Container>
        )
    
}

export default translate(Kontact);