import React from "react";
import { SchoolGallery } from "../../dummydata";
import { Card, Col, Container, Row } from "react-bootstrap";

function Gallery() {
    const { photos, videos } = SchoolGallery
    return <section className="gallery pb-4">
        <Container fluid>
            <h3 className="text-center m-0 p-3">Photos</h3>
            <Row xs={2} lg={3} className="g-2 g-lg-4 pb-3 justify-content-center">
                {
                    photos.map((photo, index) => {
                        return <Col key={index}>
                            <Card border='secondary'>
                                <Card.Img variant="top" src={photo.img} />
                                <Card.Body className="text-center">
                                    <Card.Text>
                                        {photo.description}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    })
                }
            </Row>

            <h3 className="text-center m-0 p-3">Videos</h3>
            <Row lg={2} className="g-4 pb-3 justify-content-center">
                {
                    videos.map((video, index) => {
                        return <Col key={index}>
                            <Card border='secondary'>
                                <video controls>
                                    <source src={video.vdo} type="video/mp4" />
                                </video>
                                <Card.Body className="text-center">
                                    <Card.Text>
                                        {video.description}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    })
                }
            </Row>
        </Container>
    </section>
}

export default Gallery;