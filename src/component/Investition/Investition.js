import React from 'react'
import {Container} from 'react-bootstrap'
import './Investition.css';
import {translate} from "react-switch-lang";

import dummyText from '../../DummyText'


const Page2 = (props) => {
    const [{t}] = React.useState(props)
    return (
        <Container className='investition'>
            <h2 align="center">{t('header.section2.title')}</h2>
            <p align="justify">{dummyText}</p>
            <p align="justify">{dummyText}</p>
        </Container>
        )
    
}

export default translate(Page2);