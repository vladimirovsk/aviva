import React from 'react';
import { Container } from 'react-bootstrap';
import { translate } from 'react-switch-lang';
import './Title.css';
import dummyText from '../../DummyText';


const Title = (props) => {
    const [{t}] = React.useState(props)

    return (
        <Container className='title'>
            <h2 align="center">TITLE</h2>
            <p align="justify">{dummyText}</p>
            <p align="justify">{dummyText}</p>
        </Container>
    )
}


export default translate(Title);