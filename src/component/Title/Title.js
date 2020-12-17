import React from "react"
import "./Title.css"
import {translate} from "react-switch-lang";
import {Col, Container, Row} from "react-bootstrap";


//import HD from "./headers.jpg"
import leftImg from '../../img/leftImg.gif'


const Title = (props) => { 

React.useEffect(() => {
        const animItems = document.querySelectorAll('._animate');
       
        //console.log('OFFSET', window.innerHeight)
        if (animItems.length>0){
            window.addEventListener('scroll', animOnScroll);

            function animOnScroll(){
                //console.log('animOnScroll', animItems);
                for (let index = 0; index < animItems.length; index++){
                    const animItem = animItems[index];
                    const animItemHeight = animItem.offsetHeight;
                    const animItemOffset = offset(animItem).top;          
                    const animStart = 5;

                    let animItemPoint = window.innerHeight - animItemHeight / animStart;
                    
                    if (animItemHeight > window.innerHeight){
                        console.log(animItemHeight, window.innerHeight);
                        animItemPoint =  window.innerHeight - window.innerHeight / animStart;
                    }
                    console.log(window.pageYOffset, ">",animItemOffset-animItemPoint);
                    if ((window.pageYOffset > animItemOffset - animItemPoint) && (window.pageYOffset < (animItemOffset+ animItemHeight))){
                       animItem.classList.add('_active'); 
                    }else
                    {
                        animItem.classList.remove('_active'); 
                    }
                }
            }

            setTimeout(()=>{
                animOnScroll();
            }, 1000)
        }
    }, [])
    function offset(el){
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
    
    const [{t}] = React.useState(props) 
        return (
           
            <Container fluid='md' className={"title"}>
                <Row>
                <Col lg='8' fluid={'sm'}>
                    <img className="img_title" src={leftImg} alt=""/>
                </Col>
                <Col lg='4' >
                    <h1 className='titleLogotip _animate'>Luxury Insurance</h1>

                    <a class="btn btn-primary titleContact _animate flex-right" href="tel:+48600328158" 
                        style={{background:'#9f8240', borderColor:'#9f8240'}}
                        >tel: +48 600 328 158 </a>
                    <h4 className='titleContact'>
                        <a className='_Email' href="mailto:konktakt@luxuryinsurance.pl">
                            konktakt@luxuryinsurance.pl</a>
                    </h4>
                </Col>
                </Row>
                
            </Container>

        )
}

export default translate(Title)
