import React from 'react'

import {Container} from 'react-bootstrap';

import Header from './component/Header/Header'
import Home from './component/Home/Home'
import Title from './component/Title/Title'

import {translate, setTranslations, setDefaultLanguage, setLanguageCookie} from 'react-switch-lang'
import * as PropTypes from "prop-types";
import en from './i18/en.json';
import pl from './i18/pl.json';
import Kontact from './component/Kontact/Kontact';
import Investition from './component/Investition/Investition';


setTranslations({en, pl });
setDefaultLanguage('pl');
setLanguageCookie();

function App() {
  return (
    <Container>
        <Header />
        <Title id='title'/>
        <Home id='home' />
        <Investition id='investition' />
        <Kontact id='kontact' />
    </Container>  
  );
}

App.propTypes = {
  t: PropTypes.func.isRequired,
};

export default translate(App);
