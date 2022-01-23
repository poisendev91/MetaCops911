import React from 'react'
import Container from "@mui/material/Container";


import Table from "./Table/Table"
import "./ExploreAllLaunches.css"

const ExploreAllLaunches = () => {
    return (
        <div className="explore__all__launches">
            <h1 style={{ fontSize: "36px", fontWeight: "700" }}>Explore es</h1>
            <span style={{ fontSize: "18px" }}>
                Magic Eden Launchpad is excited to support the following projects in launching their
                collections. We focus on the tech, so you can focus on the community.
            </span>
            <Container className="alllaunches_container">
                <Table />
            </Container>
        </div>
    );
}

export default ExploreAllLaunches
