import React from "react";
import { SchoolFaculty } from "../../dummydata";
import { Container, Table } from "react-bootstrap";

function Faculty() {
    return <section className="faculty text-center pt-2 pb-5">
        <Container>
            <h3 className="pt-2 p-lg-2">School Faculty</h3>
            <Table striped hover bordered responsive className="m-2 m-lg-0">
                <thead>
                    <tr>
                        <th className="p-lg-3">Name of School Faculty</th>
                        <th className="p-lg-3">Designation</th>
                        <th className="p-lg-3">Qualification</th>
                        <th className="p-lg-3">Experience</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        SchoolFaculty.map((faculty, index) => {
                            return <tr key={index}>
                                <td className="p-lg-3">{faculty.name}</td>
                                <td className="p-lg-3">{faculty.designation}</td>
                                <td className="p-lg-3">{faculty.qualification}</td>
                                <td className="p-lg-3">{faculty.experience}</td>
                            </tr>
                        })
                    }
                </tbody>
            </Table>
        </Container>
    </section>
}

export default Faculty;