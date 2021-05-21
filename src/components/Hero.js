import React from 'react'
import '../styles/Hero.css'
import '../App.css'
import { Button } from './Button'

function Hero() {
    return (
        <div className="hero-container">
            <h1>RESULTS DRIVEN</h1>
            <p>Exceed your fitness goals</p>
            <div className="hero-btns">
                <Button 
                    className="btns" 
                    buttonStyle="btn--outline" 
                    buttonSize="btn--large"
                    >
                    LEARN MORE
                </Button>
                <Button 
                    className="btns" 
                    buttonStyle="btn--primary" 
                    buttonSize="btn--large"
                    >
                    OUR PROGRAMS
                </Button>
            </div>
        </div>
    )
}

export default Hero
