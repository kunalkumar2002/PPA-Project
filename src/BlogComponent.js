import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import article1img from "../src/article1img.png";
import article2img from "../src/article2Img.png";
import article3img from "../src/article3Img.png";

function BlogComponent() {
    return (
        <Container fluid className="py-5">
            <Row className="justify-content-center">
                <Col md={8} className="text-center mb-5">
                    <h1 className="display-6">Caring is the new marketing</h1>
                    <p>
                        The Nexcent blog is the best place to read about the
                        latest membership insights, trends, and more. See who's
                        joining the community, read about how our community is
                        increasing their membership income and lots more.
                    </p>
                </Col>
            </Row>

            <Row className="mx-5">
                <Col md={4} className="mb-2">
                    <div className="position-relative">
                        <Image
                            src={article1img}
                            alt="Article 1"
                            fluid
                            className="rounded"
                        />
                        <div className="position-absolute bottom-0 w-100  mh-50 text-white p-3 bg-dark bg-opacity-50 rounded-bottom">
                            <h4>
                                Creating Streamlined Safeguarding Processes with
                                OneRen
                            </h4>
                            <a href="#" className="btn btn-link text-white">
                                Read more →
                            </a>
                        </div>
                    </div>
                </Col>
                <Col md={4} className="mb-2">
                    <div className="position-relative">
                        <Image
                            src={article2img}
                            alt="Article 1"
                            fluid
                            className="rounded"
                        />
                        <div className="position-absolute bottom-0 w-100 mh-50 text-white p-3 bg-dark bg-opacity-50 rounded-bottom">
                            <h4>
                                Creating Streamlined Safeguarding Processes with
                                OneRen
                            </h4>
                            <a href="#" className="btn btn-link text-white">
                                Read more →
                            </a>
                        </div>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="position-relative">
                        <Image
                            src={article3img}
                            alt="Article 1"
                            fluid
                            className="rounded"
                        />
                        <div className="position-absolute bottom-0 w-100  mh-50 text-white p-3 bg-dark bg-opacity-50 rounded-bottom">
                            <h4>
                                Creating Streamlined Safeguarding Processes with
                                OneRen
                            </h4>
                            <a href="#" className="btn btn-link text-white">
                                Read more →
                            </a>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default BlogComponent;
