import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const About = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <Accordion
            style={{
                color: "white",
                backgroundColor: "#09080d",
                border: "1px solid #2b273f",
                borderRadius: "10px",
                // padding: "5px 5px",
            }}
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
        >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: "white", transform: "scale(1.8)" }} />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
            >
                <Typography sx={{ width: "100%", flexShrink: 0 }} style={{ fontSize: "large" }}>
                    <PersonOutlineOutlinedIcon
                        style={{ transform: "scale(1.8)", color: "#7d46f7" }}
                    />
                    &nbsp;&nbsp;&nbsp;About Zero G Labs: Solanauts
                </Typography>
            </AccordionSummary>
            <AccordionDetails style={{ backgroundColor: "#1c1929" ,borderRadius: "10px"}}>
                <Typography style={{ fontSize: "larger" }}>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet
                    egestas eros, vitae egestas augue. Duis vel est augue.
                </Typography>
            </AccordionDetails>
        </Accordion>
    );
};

export default About;
