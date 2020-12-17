import React from 'react'
import {Container} from 'react-bootstrap'
import './Kierunek.css';
import {translate} from "react-switch-lang";
import {Card, Grid,CardMedia} from '@material-ui/core'


import dummyText from '../../DummyText'
import img1 from '../../img/luxuryCarUmbrella.jpg'
import img2 from '../../img/SavePiople.jfif'



const Page2 = (props) => {
    const [{t}] = React.useState(props)
    return (
        <Container className='investition'>
        
            <h2 align="center">{t('header.section2.title')}</h2>
            <Grid container 
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={10}>

                <Grid item xs={12}  md={4} sm={4}>
                <Card className='cardInvest'>

                    <CardMedia 
                        component='img'
                        alt="Owner"
                        height='400px'
                        image={img1}
                        title="Owner"
                                />
                    </Card>
                </Grid>
                
                <Grid item xs={12} md={4} sm={4}>
                <Card className='cardInvest'>
                    <CardMedia  
                            component='img'
                            alt="Owner"
                            height='400px'
                            image={img2}
                            title="Owner"
                    />
                    </Card>
                </Grid>

                <Grid item xs={12} md={4} sm={4}>
                <Card className='cardInvest'>
                    <CardMedia 
                            component='img'
                            alt="Owner"
                            height='400px'
                            image={img1}
                            title="Owner"
                    />
                    </Card>
                </Grid>

            </Grid>    
           
        </Container>
        )
    
}

export default translate(Page2);