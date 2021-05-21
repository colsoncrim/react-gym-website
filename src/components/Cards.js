import React from 'react'
import '../styles/Cards.css'
import CardItem from './CardItem'

function Cards() {
    return (
        <div className="cards">
            <h1>Check out our collection of training programs</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src="/images/img-5.jpg"
                            text="CrossFit 60 - Our signature CrossFit program, 60 minutes per session"
                            label="CrossFit 60"
                            path="/crossfit"
                        />
                        <CardItem 
                            src="/images/img-2.jpg"
                            text="Reach your personal goals with the help of our top rated personal trainers"
                            label="Personal Training"
                            path="/personal-training"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                            src="/images/img-1.jpg"
                            text="We offer time slots for individuals who prefer open gym training"
                            label="Open Gym"
                            path="/open-gym"
                        />
                        <CardItem 
                            src="/images/img-3.jpg"
                            text="Stay motivated by joining one of our high intensity group training sessions"
                            label="Group Class"
                            path="/group-class"
                        />
                        <CardItem 
                            src="/images/img-4.jpg"
                            text="Improve your strength and mobility with proven functional training techniques"
                            label="Functional Training"
                            path="/functional-training"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
