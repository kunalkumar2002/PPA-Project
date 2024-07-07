import React from "react";

import DesignFooterImage from "../src/DesignFooter.png";
import { Container, Row, Col, Button } from "react-bootstrap";
function FooterDesign() {
    return (
        <section className="py-5">
            <Container>
                <Row className="align-items-center">
                    <Col
                        lg={6}
                        className="d-flex align-items-center justify-content-lg-around justify-content-start"
                    >
                        <img
                            src={DesignFooterImage}
                            alt="Pixelgrade Experience"
                            className="img-fluid w-50 h-75"
                        />
                    </Col>

                    <Col lg={6}>
                        <div className="text-start">
                            {" "}
                            {/* Left align text within this container */}
                            <h2 className="display-5 fw-bold mb-3">
                                How to design your site footer like we did
                            </h2>
                            <p className="lead text-muted mb-4">
                                Donec a eros justo. Fusce egestas tristique
                                ultrices. Nam tempor, augue nec tincidunt
                                molestie, massa nunc varius arcu, at scelerisque
                                elit erat a magna. Donec quis erat at libero
                                ultrices mollis. In hac habitasse platea
                                dictumst. Vivamus vehicula leo dui, at porta
                                nisi facilisis finibus. In euismod augue vitae
                                nisi ultricies, non aliquet urna tincidunt.
                                Integer in nisi eget nulla commodo faucibus
                                efficitur quis massa. Praesent felis est,
                                finibus et nisi ac, hendrerit venenatis libero.
                                Donec consectetur faucibus ipsum id gravida.
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

export default FooterDesign;
