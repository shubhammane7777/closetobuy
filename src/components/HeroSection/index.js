import React,{useState} from 'react'
import {Button} from '../ButtonElement';
import {
     HeroContainer, 
     HeroContent,
     HeroH1,HeroP,
     HeroBtnWrapper,
     ArrowForward
     ,ArrowRight
    } from './HeroElements'
    import "./HeroSection.css";
    
const HeroSection =({img,alt})=>{

    const [hover , setHover]=useState(false)
    const onHover = ()=>{
        setHover(!hover)
    }
return(
    <div>
    <HeroContainer id="hero">
    
        <HeroContent >
            <HeroH1>Food Delivery Made Easy</HeroH1>
            <HeroP>
                Sign Up for new Account Today On Mobile App and get 50 % off and 
                free Delivery and get one food item
                upto 50 rupees free.
            </HeroP>
            <HeroBtnWrapper>
                <Button to='/signin' onMouseEnter={onHover} onMouseLeave={onHover} bg-dark>Get Started
                {hover ?<ArrowForward/> : <ArrowRight/>}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>        
    </HeroContainer>
    <div className='herosvg'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#010606" fill-opacity="1" d="M0,0L60,21.3C120,43,240,85,360,90.7C480,96,600,64,720,48C840,32,960,32,1080,74.7C1200,117,1320,203,1380,245.3L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
    </div>
    </div>
)
}

export default HeroSection