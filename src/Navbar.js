import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import "./Navbar.css";

function NexcentNavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">Nexcent</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/services">Service</Nav.Link>
                        <Nav.Link href="/features">Feature</Nav.Link>
                        <Nav.Link href="/products">Product</Nav.Link>
                        <Nav.Link href="/testimonials">Testimonial</Nav.Link>
                        <Nav.Link href="/faq">FAQ</Nav.Link>
                        <Button
                            variant="outline-success"
                            href="/login"
                            className="button-margin"
                        >
                            Login
                        </Button>
                        <Button
                            variant="success"
                            href="/signup"
                            className="button-margin"
                        >
                            Sign Up
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NexcentNavBar;
