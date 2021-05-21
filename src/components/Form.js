import React from 'react'
import '../styles/Form.css'
import { Button } from './Button'

export default function Form(props) {
    return (
        <>
            <div className="split-screen">
                <div className="left">
                    <section className="copy">
                        <h1 className="program-heading-large">{props.heading}</h1>
                        <p>{props.details}</p>
                    </section>
                </div>
                <div className="right">
                    <form>
                        <section className="copy">
                            <h2 className="program-heading-small">Sign Up</h2>
                            <div className="login-container">
                                <p>Already have an account? <a className="link" href="/"><strong>Log In</strong></a></p>
                            </div>
                        </section>
                        <div className="input-container name">
                            <label for="fname">Full Name</label>
                            <input id="fname" name="fname" type="text"/>
                        </div>
                        <div className="input-container email">
                            <label for="email">Email</label>
                            <input id="email" name="email" type="email"/>
                        </div>
                        <div className="input-container password">
                            <label for="password">Password</label>
                            <input id="password" name="password" placeholder="Must be at least 6 characters" type="password"/>
                            <i className="far fa-eye-slash"></i>
                        </div>
                        <div className="input-container cta">
                            <label className="checkbox-container">
                                <input type="checkbox"/>
                                <span className="checkmark"></span>
                                Sign up for email updates.
                            </label>
                        </div>
                        <Button className="btns signup-btn" buttonStyle="btn--primary--inverted" buttonSize="btn--large" type="submit">Sign Up</Button>
                        <section className="copy legal">
                            <p><span className="small">By continuing, you agree to accept our <br></br> <a className="link" href="/">Privacy Policy</a> &amp; <a className="link" href="/">Terms of Service</a>.</span></p>
                        </section>
                    </form>
                </div>
            </div>
        </>
    )
}