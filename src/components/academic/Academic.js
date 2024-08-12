import React from "react";
import { Container } from "react-bootstrap";
import { Academics } from "../../dummydata";
import { VectorPen } from "react-bootstrap-icons";

function Academic() {
    const { curriculum, teachingMethodologies, educationalResources } = Academics
    return <section className="academic px-2 pb-4">
        <Container>
            <h3 className="text-center m-0 p-3">Academics</h3>

            <h4 className="bg-warning-subtle border-start border-5 border-warning p-2"><VectorPen /> Curriculum</h4>
            <h5>Primary(Grades 1-5)</h5>
            <p>{curriculum.primary}</p>
            <h5>Secondary(Grades 6-10)</h5>
            <p>{curriculum.secondary}</p>
            <h5>Senior Secondary(Grades 11-12)</h5>
            <ul>
                <h5>Commerce Stream</h5>
                <p>{curriculum.seniorSecondary.commerceStream}</p>
                <h5>Science Stream</h5>
                <p>{curriculum.seniorSecondary.scienceStream}</p>
            </ul>

            <h4 className="bg-warning-subtle border-start border-5 border-warning p-2 mt-4"><VectorPen /> Teaching Methodologies</h4>
            <p>{teachingMethodologies}</p>
            <h4 className="bg-warning-subtle border-start border-5 border-warning p-2 mt-4"><VectorPen /> Educational Resources</h4>
            <p>{educationalResources}</p>
        </Container>
    </section>
}

export default Academic;