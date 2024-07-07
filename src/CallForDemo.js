import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function CallForDemo() {
    return (
        <Container fluid className="py-5">
            <Row className="justify-content-center text-center">
                <Col md={8}>
                    <h1>Pellentesque suscipit fringilla libero eu.</h1>
                    <Button variant="success" size="lg" className="mt-4">
                        Get a Demo →
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default CallForDemo;
