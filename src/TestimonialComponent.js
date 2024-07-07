import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import TeslaLogo from "../src/TeslaLogo.png";
import logo1 from "./LogoAssets/logo1.svg";
import logo2 from "./LogoAssets/logo2.svg";
import logo3 from "./LogoAssets/logo3.svg";
import logo4 from "./LogoAssets/logo4.svg";

function TestimonialComponent() {
    return (
        <Container>
            <Row className="align-items-center text-start">
                <Col md={3} className="text-start mr-lg-5">
                    <Image src={TeslaLogo} alt="Tesla Logo" rounded fluid />
                </Col>

                <Col md={9}>
                    <p>
                        Maecenas dignissim justo eget nulla rutrum molestie.
                        Maecenas lobortis sem dui, vel rutrum risus tincidunt
                        ullamcorper. Proin eu enim metus. Vivamus sed libero
                        ornare, tristique quam in, gravida enim. Nullam ut
                        molestie arcu, at hendrerit elit. Morbi laoreet elit at
                        ligula molestie, nec molestie mi blandit. Suspendisse
                        cursus tellus sed augue ultrices, quis tristique nulla
                        sodales. Suspendisse eget lorem eu turpis vestibulum
                        pretium. Suspendisse potenti. Quisque malesuada enim
                        sapien, vitae placerat ante feugiat eget. Quisque
                        vulputate odio neque, eget efficitur libero condimentum
                        id. Curabitur id nibh id sem dignissim finibus ac sit
                        amet magna.
                    </p>

                    <div className="d-flex flex-column mb-3">
                        {" "}
                        {/* Added margin-bottom */}
                        <strong className="mb-1 h2 text-success">
                            Tim Smith
                        </strong>
                        <small className="text-muted">
                            British Dragon Boat Racing Association
                        </small>
                    </div>

                    <div className="d-flex justify-content-between align-items-center flex-wrap">
                        {" "}
                        {/* Wrap on smaller screens */}
                        <div className="d-flex gap-3">
                            <Image src={logo1} alt="Logo 1" fluid />
                            <Image src={logo2} alt="Logo 2" fluid />
                            <Image src={logo3} alt="Logo 3" fluid />
                            <Image src={logo4} alt="Logo 4" fluid />
                        </div>
                        <a href="#" className="h4 text-success">
                            Meet all customers →
                        </a>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default TestimonialComponent;
