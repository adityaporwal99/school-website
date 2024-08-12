import React from "react";
import { AboutUs } from "../../dummydata";
import { Col, Container, Row } from "react-bootstrap";

function About() {
    const { history, vision, mission, principalMsg, infrastructure } = AboutUs
    return <section className="about px-2 pb-4">
        <Container fluid>
            <h3 className="text-center m-0 pt-3 p-lg-3">About Us</h3>

            <Row className="pb-4">
                <Col lg={6}>
                    <h4 className="text-capitalize">history</h4>
                    <p>{history.repeat(3)}</p>
                    <p>{history.repeat(2)}</p>
                    <p>{history.repeat(4)}</p>
                </Col>
                <Col lg={6}>
                    <img src="school-website/images/building.jpg" alt="school-image" className="w-100" />
                </Col>
            </Row>

            <Row xs={1} lg={2}>
                <Col>
                    <h4 className="text-capitalize">our vision</h4>
                    <p className="bkg border-start border-5 border-warning px-3 py-2">{vision}</p>
                </Col>
                <Col>
                    <h4 className="text-capitalize">our mission</h4>
                    <p className="bkg border-start border-5 border-warning px-3 py-2">{mission}</p>
                </Col>
            </Row>

            <Row className="gx-4 pb-lg-4">
                <h4 className="text-capitalize">principal's desk</h4>
                <Col lg={3} className="pt-2">
                    <img src="school-website/images/placeholder1.jpg" alt="principal-image" className="w-100" />
                </Col>
                <Col lg={9} className="pt-4">
                    <p>{principalMsg.repeat(5)}</p>
                    <p>{principalMsg.repeat(6)}</p>
                </Col>
            </Row>

            <h4 className="text-capitalize">school infrastructure</h4>
            <ul>
                {
                    infrastructure.map((infra, index) => {
                        return <li key={index}>{infra}</li>
                    })
                }
            </ul>
        </Container>
    </section>
}

export default About;