import React from 'react';
import './HeroSection.css';
import {SignupButton} from '../Btn/btn';


function HeroSection() {
    return (
        <div className = 'hero-container'>
            <video src= "/videos/video.mp4" autoPlay loop muted />
            <h1>ADVENTURE AWAITS</h1>
            <p>WHAT ARE YOU WAITING FOR?</p>
            <div className='hero-btns'>
                <SignupButton
                className='btns' 
                buttonStyle='btn--primary'
                buttonSize='btn--large'
                >
                    GET STARTED
                </SignupButton>
            </div> 
        </div>
    )
}

export default HeroSection
