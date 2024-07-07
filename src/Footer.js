import React from "react";
import { Container, Row, Col, Form, InputGroup, Button } from "react-bootstrap";
import Logo from "./LogoAssets/NexcentLogo.svg";
import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons CSS

function Footer() {
    return (
        <footer className="bg-dark text-white py-5">
            <Container>
                <Row>
                    <Col md={4} className="text-start">
                        <img src={Logo} alt="Nexcent Logo" className="mb-3" />
                        <p className="small text-secondary text-start">
                            Copyright © 2020 Nexcent Ltd. <br />
                            All rights reserved
                        </p>
                    </Col>
                    <Col md={2} className="text-start">
                        <h5>Company</h5>
                        <ul className="list-unstyled text-start text-decoration-none">
                            <li>
                                <a href="/about" className="text-white">
                                    About us
                                </a>
                            </li>
                            <li>
                                <a href="/blog" className="text-white">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className="text-white">
                                    Contact us
                                </a>
                            </li>
                            <li>
                                <a href="/pricing" className="text-white">
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a href="/testimonials" className="text-white">
                                    Testimonials
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col md={2} className="text-start">
                        <h5>Support</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="/help" className="text-white">
                                    Help center
                                </a>
                            </li>
                            <li>
                                <a href="/terms" className="text-white">
                                    Terms of service
                                </a>
                            </li>
                            <li>
                                <a href="/legal" className="text-white">
                                    Legal
                                </a>
                            </li>
                            <li>
                                <a href="/privacy" className="text-white">
                                    Privacy policy
                                </a>
                            </li>
                            <li>
                                <a href="/status" className="text-white">
                                    Status
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col md={4} className="text-start">
                        <h5>Stay up to date</h5>
                        <InputGroup className="mb-2">
                            <Form.Control
                                placeholder="Your email address"
                                aria-label="Your email address"
                                aria-describedby="basic-addon2"
                            />
                            <Button
                                variant="outline-secondary"
                                id="button-addon2"
                            >
                                <i className="bi bi-arrow-right"></i>
                            </Button>
                        </InputGroup>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
