import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import headerImage from "./pixelGrade.png";
import "./PixelGradeSection.css";
function PixelgradeSection() {
    return (
        <section className="py-5">
            <Container>
                <Row className="align-items-center">
                    <Col
                        lg={6}
                        className="d-flex align-items-center justify-content-lg-around justify-content-start"
                    >
                        <img
                            src={headerImage}
                            alt="Pixelgrade Experience"
                            className="img-fluid w-50 h-75"
                        />
                    </Col>

                    <Col lg={6}>
                        <div className="text-start">
                            {" "}
                            {/* Left align text within this container */}
                            <h2 className="display-5 fw-bold mb-3">
                                The unseen of spending three years at Pixelgrade
                            </h2>
                            <p className="lead text-muted mb-4">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Sed eu nunc eget leo iaculis
                                mollis ac sed purus. Integer quis sollicitudin
                                nisl. Aenean vestibulum enim vitae libero
                                sodales, vitae fringilla ipsum aliquet.
                            </p>
                            <Button variant="success" size="lg">
                                Learn More
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default PixelgradeSection;
