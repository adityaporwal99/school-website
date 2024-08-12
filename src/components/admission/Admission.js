import React from "react";
import { Admissions } from "../../dummydata";
import { Container, Row, Col } from "react-bootstrap";

function Admission() {
    const { process, criteria, importantDates } = Admissions
    const handleBtn = () => { alert('Downloading...') }
    return <section className="admission pb-5">
        <Container className="px-lg-0 px-4">
            <h3 className="text-center m-0 p-3">Admissions</h3>

            <Row className='justify-content-center align-items-center'>
                <Col lg={8}>
                    <p>{process}</p>
                    <p>Click to download <button onClick={handleBtn} className="btn btn-primary">Download</button></p>
                    <h4>Criteria</h4>
                    <p>{criteria}</p>
                </Col>

                <Col xs={9} lg={4} className="bg-warning bg-gradient py-2 px-lg-4">
                    <h5>Important Dates</h5>
                    {
                        importantDates.map((date, index) => {
                            return <li key={index}>{date}</li>
                        })
                    }
                </Col>
            </Row>
        </Container>
    </section>
}

export default Admission;