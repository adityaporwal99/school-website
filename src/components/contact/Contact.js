import React from "react";
import { ContactUs } from '../../dummydata'
import { Formik, Form, Field } from "formik";
import { Button, Col, Container, Row } from "react-bootstrap";

function Contact() {
    const initalValues = { name: '', email: '', message: '' }
    const onSubmit = (values, submit) => {
        alert(`Your message has been received.`)
        submit.resetForm()
    }
    const { address, phone, email, googleMap } = ContactUs
    return <section className="contact pb-5">
        <Container>
            <Row className="justify-content-center">
                <Col lg={12}>
                    <h3 className="text-center m-0 p-3">Contact Us</h3>
                </Col>

                <Col xs={10} lg={8} className="p-0 shadow" style={{ backgroundColor: "#f5f5f5" }}>
                    <Row className="g-0">
                        <Col xs={12} lg={6} className="py-2 px-3">
                            <h5 className="m-0">Address:</h5>
                            <p className="m-0 pb-2">{address}</p>
                            <h5 className="m-0 ">Phone:</h5>
                            <p className="m-0 pb-2">{phone}</p>
                            <h5 className="m-0 ">Email:</h5>
                            <p className="m-0 pb-3">{email}</p>

                            <Formik initialValues={initalValues} onSubmit={onSubmit}>
                                <Form>
                                    <div className="form-floating pb-2">
                                        <Field type='text' id='name' name='name' placeholder='Enter your name' className="form-control" />
                                        <label htmlFor="name" >Name</label>
                                    </div>
                                    <div className="form-floating pb-2">
                                        <Field type='email' id='email' name='email' placeholder='Enter your email' className="form-control" />
                                        <label htmlFor="email">Email</label>
                                    </div>
                                    <div className="form-floating pb-2">
                                        <Field as='textarea' id='message' name='message' placeholder='Write your message here...' className="form-control" style={{ height: "100px" }} />
                                        <label className="labMsg" htmlFor="message">Message</label>
                                    </div>
                                    <div className="text-center pb-1">
                                        <Button type='submit' variant="outline-primary">Send Message</Button>
                                    </div>
                                </Form>
                            </Formik>
                        </Col>

                        <Col xs={12} lg={6}>
                            <iframe src={googleMap} title="mapIntegration" style={{ width: "100%", height: "100%" }} />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </section >
}

export default Contact;