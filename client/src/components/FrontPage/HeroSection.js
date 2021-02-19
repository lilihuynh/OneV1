import React from 'react';
import './HeroSection.css';
import {SignupButton, SigninButton} from '../Btn/index';


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
                <SigninButton
                className='btns' 
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                    SIGN IN
                </SigninButton>
            </div> 
        </div>
    )
}

export default HeroSection
