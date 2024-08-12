import React from "react";
import { Students } from "../../dummydata";
import { Card, Col, Container, Row } from "react-bootstrap";

function Student() {
    const { extracurricularActivities, clubsAndSocieties, achievements, studentCouncil } = Students
    const extras = extracurricularActivities.split(",")
    const clubs = clubsAndSocieties.split(",")
    return <section className="student pb-5">
        <Container fluid>
            <h3 className="text-center m-0 p-3">Students</h3>
            <Row>
                <Col lg={2} className="p-lg-4 pb-4">
                    <h4 className="text-center p-lg-2 pb-2 m-0">Extracurricular Activities</h4>
                    {
                        extras.map((extra, index) => {
                            return <h5 className="bkg p-lg-2 py-1 px-2 border-start border-5 border-warning" key={index}>{extra}</h5>
                        })
                    }
                </Col>

                <Col lg={8} className="text-center">
                    <h4 className="m-0 pb-2">Achievements</h4>
                    <Row xs={2} lg={3} className="pb-lg-5 pb-4 g-4 justify-content-center">
                        {
                            achievements.map((achievement, index) => {
                                return <Col key={index}>
                                    <Card border="secondary">
                                        <Card.Img variant="top" src={achievement.img} className="border-bottom border-secondary" />
                                        <Card.Body>
                                            <Card.Title>{achievement.name}</Card.Title>
                                            <Card.Text>{achievement.winner}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            })
                        }
                    </Row>

                    <h4 className="m-0 p-2">Student Council</h4>
                    <Row xs={2} lg={3} className="pb-lg-0 pb-4 g-4 justify-content-center">
                        {
                            studentCouncil.map((council, index) => {
                                return <Col key={index}>
                                    <Card border="secondary">
                                        <Card.Img variant="top" src={council.img} className="border-bottom border-secondary" />
                                        <Card.Body>
                                            <Card.Title>{council.name}</Card.Title>
                                            <Card.Text>{council.position}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            })
                        }
                    </Row>
                </Col>

                <Col lg={2} className="p-lg-4">
                    <h4 className="text-center p-lg-2 pb-2 m-0">Clubs/Societies</h4>
                    {
                        clubs.map((club, index) => {
                            return <h5 className="bkg p-lg-2 py-1 px-2 border-start border-5 border-warning" key={index}>{club}</h5>
                        })
                    }
                </Col>
            </Row>
        </Container>
    </section>
}

export default Student;