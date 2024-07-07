import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import logo1 from "./LogoAssets/logo1.svg";
import logo2 from "./LogoAssets/logo2.svg";
import logo3 from "./LogoAssets/logo3.svg";
import logo4 from "./LogoAssets/logo4.svg";
import logo5 from "./LogoAssets/logo5.svg";
import logo6 from "./LogoAssets/logo6.svg";

function ClientShowcase() {
    const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

    return (
        <section className="py-5">
            <Container>
                <h2 className="text-center mb-4">Our Clients</h2>
                <p className="text-center text-muted mb-5">
                    We have been working with some Fortune 500 Clients
                </p>

                <Row className="justify-content-center">
                    {logos.map((logo, index) => (
                        <Col
                            key={index}
                            xs={6}
                            sm={4}
                            md={3}
                            lg={2}
                            className="mb-3 text-center"
                        >
                            <Image
                                src={logo}
                                alt={`Client ${index + 1}`}
                                fluid
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}

export default ClientShowcase;
