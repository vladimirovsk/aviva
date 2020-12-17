import React from "react"
import "./Home.css"
import {translate} from "react-switch-lang";
import {Col, Container, Row} from "react-bootstrap";
import {Card, Typography, CardContent, CardActionArea, CardMedia} from '@material-ui/core'
import dummyText from '../../DummyText'


//import HD from "./headers.jpg"
import leftImg from '../../img/Owner.jpg'


const Home = (props) => {   
    const [{t}] = React.useState(props) 
        return (
            <Container className={"home"}>
           
                <Row>
                    <Col xs="8" className='mt-5' style={{textAlign:'justify'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Id nibh tortor id aliquet. Sed lectus vestibulum mattis ullamcorper 
                        velit sed. Nec nam aliquam sem et tortor. Elit eget gravida cum sociis 
                        natoque. Ipsum a arcu cursus vitae. Massa sapien faucibus et molestie ac 
                        feugiat sed. Turpis egestas maecenas pharetra convallis posuere morbi leo. 
                        uis at consectetur lorem donec massa sapien faucibus et molestie. 
                        Purus sit amet luctus venenatis lectus. Pellentesque nec nam aliquam sem et tortor consequat id porta. 
                        Sapien et ligula ullamcorper malesuada. Fringilla ut morbi tincidunt augue interdum velit euismod.
                         Vitae turpis massa sed elementum tempus egestas sed. Netus et malesuada fames ac turpis egestas integer eget aliquet. 
                         Blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada. Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis.
                        Nisi est sit amet facilisis.     
                    </Col>
                    
                </Row>
    
            </Container>

        )
}

export default translate(Home)
