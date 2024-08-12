import React from "react";
import './home.css'
import { HomePage } from "../../dummydata";
import { Carousel } from "react-bootstrap";

function Home() {
    const { introduction, highlights } = HomePage
    const marquee = introduction.split(' ')
    return <section className="home">
        <Carousel>
            {
                highlights.map((highlight, index) => {
                    return <Carousel.Item key={index}>
                        <img src={highlight.img} className='d-block w-100' alt='' />
                        <Carousel.Caption>
                            <h4>{highlight.description}</h4>
                        </Carousel.Caption>
                    </Carousel.Item>
                })
            }
        </Carousel>

        <div className="marquee-container">
            <div className="marquee-content text-center text-uppercase">
                {
                    marquee.map((marque, index) => {
                        return <h3 key={index}>{marque}</h3>
                    })
                }
            </div>
        </div>
    </section>
}

export default Home;