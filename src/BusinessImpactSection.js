import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import VisibilitySensor from "react-visibility-sensor";
import MembersIcon from "./LogoAssets/Members.svg";
import ClubsIcon from "./LogoAssets/Clubs.svg";
import EventsBookingIcon from "./LogoAssets/EventsBooking.svg";
import PaymentsIcon from "./LogoAssets/Payments.svg";
import CountUp from "react-countup";

function BusinessImpactSection() {
    const stats = [
        { icon: MembersIcon, label: "Members", value: 2245341 },
        { icon: ClubsIcon, label: "Clubs", value: 46328 },
        { icon: EventsBookingIcon, label: "Event Bookings", value: 828867 },
        { icon: PaymentsIcon, label: "Payments", value: 1926436 },
    ];

    const [activeSection, setActiveSection] = useState(false);

    return (
        <section style={{ backgroundColor: "#CED8D1" }} className="py-5">
            <Container>
                <Row className="align-items-center text-center">
                    <Col md={6} className="text-md-start mb-4 mb-md-0">
                        <h2 className="display-6 fw-medium ">
                            <span className="text-secondary">
                                Helping a local
                            </span>
                            <p className="text-success">
                                business reinvent itself
                            </p>
                        </h2>
                        <p className="text-muted">
                            We reached here with our hard work and dedication
                        </p>
                    </Col>
                    <Col md={6}>
                        <VisibilitySensor
                            onChange={(isVisible) => {
                                if (isVisible && !activeSection) {
                                    setActiveSection(true);
                                }
                            }}
                        >
                            <Row xs={1} md={2} className="g-4">
                                {stats.map((stat) => (
                                    <Col
                                        key={stat.label}
                                        className="text-start text-sm-center p-3 rounded shadow-sm"
                                    >
                                        <div class="text-sm-center display-6 fw-medium text-success d-flex justify-content-center justify-content-sm-center">
                                            <img
                                                src={stat.icon}
                                                alt={stat.label}
                                                className="img-fluid mb-2"
                                                style={{
                                                    maxWidth: "40px",
                                                    marginLeft: "5px",
                                                }}
                                            />
                                            <CountUp
                                                start={activeSection ? 0 : null}
                                                end={stat.value}
                                                duration={4.75}
                                            />
                                        </div>
                                        <div className="text-muted text-sm-center ">
                                            {stat.label}
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </VisibilitySensor>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default BusinessImpactSection;
