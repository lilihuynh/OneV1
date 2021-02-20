import React from 'react'

function HeroSection() {
    return (
        <div className='hero-container'>
        <video src="/video/video-2.mp4" autoPlay loop muted />
        <h1> Adventure Awaits</h1>
        <p> What are you waiting for?</p>
        <div className='hero-btns'>
            <DeleteBtn 
            className='btns' buttonStyle='btn--outline'
            buttonSize='btn--large'> 
            Sign up
            </DeleteBtn>
            <DeleteBtn 
            className='btns' buttonStyle='btn--primary'
            buttonSize='btn--large'> 
           Sign In <i className='far fa-play-circle' />
            </DeleteBtn>
        </div>
        </div>
    )
}