import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Facebook, HeartFill, Instagram, Linkedin, Youtube } from "react-bootstrap-icons";

function Foot() {
    return <section className="foot">
        <Container>
            <Row className="justify-content-center p-5" >
                <Col xs={3} lg={1}>
                    <a href="https://www.facebook.com/" target="blank" className="foot-icon">
                        <Facebook />
                    </a>
                </Col>
                <Col xs={3} lg={1}>
                    <a href="https://www.instagram.com/" target="blank" className="foot-icon">
                        <Instagram />
                    </a>
                </Col>
                <Col xs={3} lg={1}>
                    <a href="https://www.linkedin.com/" target="blank" className="foot-icon">
                        <Linkedin />
                    </a>
                </Col>
                <Col xs={3} lg={1}>
                    <a href="https://www.youtube.com/" target="blank" className="foot-icon">
                        <Youtube />
                    </a>
                </Col>
            </Row>

            <Row>
                {
                    Array.from({ length: 4 }).map((_, index) => {
                        return <Col xs={3} lg={3} className="text-center pb-2" key={index}>
                            <h4>LINKS</h4>
                            {Array.from({ length: 3 }).map((_, index) => {
                                return <a key={index} className="d-block text-decoration-none text-dark p-2" href="#!">Link {index + 1}</a>
                            })}
                        </Col>
                    })
                }
            </Row>
        </Container>

        <div className="legal text-center p-2">
            Copyright © 2024 | Made with <HeartFill className="text-danger" /> by <a className="text-decoration-none text-white" href="https://github.com/adityaporwal99" target="blank">Aditya</a>
        </div>
    </section>
}

export default Foot;