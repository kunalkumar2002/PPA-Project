import React from "react";
import { Carousel } from "react-bootstrap";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import headerImage from "./header.png";

function CustomCarousel() {
    return (
        <Carousel
            slide
            controls={true}
            indicators={true}
            interval={null}
            nextIcon={<ChevronRight className="custom-icon" />}
            prevIcon={<ChevronLeft className="custom-icon" />}
        >
            <Carousel.Item>
                <div className="d-flex flex-column flex-lg-row align-items-center custom-carousel-item justify-content-around">
                    <div className="text-center text-lg-start">
                        <h1 className="display-4 fw-bold text-success">
                            Lessons and Insights
                        </h1>
                        <h1 className="display-4 fw-bold text-success">
                            from 8 Years
                        </h1>
                        <p className="lead text-muted">
                            Where to grow your business as a photographer: site
                            or social media?
                        </p>
                        <button className="btn btn-success btn-lg">
                            Register
                        </button>
                    </div>
                    <div className="image-container mx-auto mx-lg-0">
                        <img
                            src={headerImage}
                            alt="Carousel Item 1"
                            className="img-fluid"
                        />
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="d-flex flex-column flex-lg-row align-items-center custom-carousel-item justify-content-around">
                    <div className="text-center text-lg-start">
                        <h1 className="display-4 fw-bold text-success">
                            Lorem Ipsum
                        </h1>
                        <h1 className="display-4 fw-bold text-success">
                            from 8 Years
                        </h1>
                        <p className="lead text-muted">
                            Where to grow your business as a photographer: site
                            or social media?
                        </p>
                        <button className="btn btn-success btn-lg">
                            Register
                        </button>
                    </div>
                    <div className="image-container mx-auto mx-lg-0">
                        <img
                            src={headerImage}
                            alt="Carousel Item 1"
                            className="img-fluid"
                        />
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    );
}

export default CustomCarousel;
