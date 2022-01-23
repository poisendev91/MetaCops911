import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";

import Box from "./Box";

const datas = [
    {
        title: "SUIT COLOR",
        name: "Silver",
        trait: "9% have this trait",
    },
    {
        title: "SUIT COLOR",
        name: "Silver",
        trait: "9% have this trait",
    },
    {
        title: "SUIT COLOR",
        name: "Silver",
        trait: "9% have this trait",
    },
    {
        title: "SUIT COLOR",
        name: "Silver",
        trait: "9% have this trait",
    },
    {
        title: "SUIT COLOR",
        name: "Silver",
        trait: "9% have this trait",
    },
    {
        title: "SUIT COLOR",
        name: "Silver",
        trait: "9% have this trait",
    },
    {
        title: "SUIT COLOR",
        name: "Silver",
        trait: "9% have this trait",
    },
    {
        title: "SUIT COLOR",
        name: "Silver",
        trait: "9% have this trait",
    },
    {
        title: "SUIT COLOR",
        name: "Silver",
        trait: "9% have this trait",
    },
];

const Attributes = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div>
            <Accordion
                style={{
                    color: "white",
                    backgroundColor: "#09080d",
                    border: "1px solid #2b273f",
                    borderRadius: "10px",
                    padding: "5px 5px",
                }}
                expanded={expanded === "panel4"}
                onChange={handleChange("panel4")}
            >
                <AccordionSummary
                    expandIcon={
                        <ExpandMoreIcon style={{ color: "white", transform: "scale(1.8)" }} />
                    }
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                >
                    <Typography sx={{ width: "50%", flexShrink: 0 }} style={{ fontSize: "large" }}>
                        <SecurityOutlinedIcon
                            style={{ transform: "scale(1.8)", color: "#7d46f7" }}
                        />
                        &nbsp;&nbsp;&nbsp;Attributes
                    </Typography>
                </AccordionSummary>
                <AccordionDetails
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: "10px",
                    }}
                >
                    {datas.map((data, idx) => (
                        <Box key={idx} title={data.title} name={data.name} trait={data.trait} />
                    ))}
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default Attributes;
