import React from "react";
import { HomePage } from '../../dummydata'
import { Facebook, Instagram, Youtube } from "react-bootstrap-icons";
import { Col, Container, Row } from "react-bootstrap";
import './head.css'

function Head() {
    const { schoolName, logo } = HomePage
    return <section className="head">
        <Container fluid>
            <Row>
                <Col xs={10} lg={10} className="d-flex align-items-center g-0">
                    <img src={logo} alt="school-logo" width='100px' height='100px' />
                    <h2 className="text-uppercase fw-bold">{schoolName}</h2>
                </Col>

                <Col xs={2} lg={2}>
                    <Row className="border- m-lg-2 p-1 d-flex gy-lg-0 gy-2 text-center">
                        <Col>
                            <a href="https://www.facebook.com/" target="blank" className="p-1">
                                <Facebook className=" fs-5" />
                            </a>
                        </Col>
                        <Col>
                            <a href="https://www.instagram.com/" target="blank" className="p-1">
                                <Instagram className="fs-5" />
                            </a>
                        </Col>
                        <Col>
                            <a href="https://www.youtube.com/" target="blank" className="p-1">
                                <Youtube className="fs-5" />
                            </a>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </section>
}

export default Head;