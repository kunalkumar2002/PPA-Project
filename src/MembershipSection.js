import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import "./styles.css";

import NationalAssoc from "./LogoAssets/NationalAssoc.svg";
import Memberlog from "./LogoAssets/Memberlog.svg";
import ClubsandGrp from "./LogoAssets/ClubsandGrp.svg";

function MembershipSection() {
    const features = [
        {
            icon: NationalAssoc,
            title: "National Associations",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. ",
        },
        {
            icon: Memberlog,
            title: "Membership Organizations",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. ",
        },
        {
            icon: ClubsandGrp,
            title: "Clubs and Groups",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. ",
        },
    ];

    return (
        <section className="py-5">
            <Container>
                <h2 className="text-center mb-4">Membership for All</h2>
                <Row className="justify-content-center">
                    {features.map((feature, index) => (
                        <Col
                            key={index}
                            xs={12}
                            md={6}
                            lg={4}
                            className="mb-4 text-center"
                        >
                            <img
                                src={feature.icon}
                                alt={`${feature.title} icon`}
                                className="mb-3"
                                style={{ width: "50px", height: "50px" }}
                            />
                            <h3 className="text-success">{feature.title}</h3>
                            <p className="text-muted">{feature.description}</p>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}

export default MembershipSection;
