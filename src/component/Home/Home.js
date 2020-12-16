import React from "react"
import "./Home.css"
import {translate} from "react-switch-lang";
import {Col, Container, Row} from "react-bootstrap";
import { Link} from "react-scroll";

//import HD from "./headers.jpg"
import leftImg from '../../img/leftImg.gif'


const Home = (props) => { 

React.useEffect(() => {
        const animItems = document.querySelectorAll('.titleLogotip');
       
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
    }, []);

    function offset(el){
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
    
    const [{t}] = React.useState(props) 
        return (
            <Container fluid={true} className={"home"}>
                <Row>
                <Col>
                    <img className="img_title" src={leftImg} alt=""/>
                </Col>
                <Col>
                    <h1 className='titleLogotip'>Luxury Insurance</h1>
                    <h4 className='titleContact'><Link className='titleContact' href="tel:+48600328158">+48 600 328 158</Link></h4>
                    <h4 className='titleContact'><Link className='titleContact' href="mailto:konktakt@luxuryinsurance.pl">konktakt@luxuryinsurance.pl</Link></h4>
                </Col>
                </Row>
                       
            </Container>

        )
}

export default translate(Home)
