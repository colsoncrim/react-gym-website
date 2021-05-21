import React from 'react'
import '../../App.css'
import Footer from '../Footer'
import Form from '../Form'

export default function PersonalTraining() {
    return (
        <>
        <Form 
            heading="PERSONAL TRAINING"
            details="List the details of the program here."
            style={{ backgroundImage: `url(${'../../static/img-2.jpg'})`}}
        />
        <Footer />
    </>
    )
}