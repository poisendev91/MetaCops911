import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';

import './NoOffersYet.css';

const NoOffersYet = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <div style ={{display:"flex" , alignItems: "center" , justifyContent: "center" , width: "100%"}}>
        <Accordion
            style={{
                color: "white",
                backgroundColor: "#09080d",
                border: "1px solid #2b273f",
                borderRadius: "10px",
                padding: "0px 0px",
                width:"83%"
            }}
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
            className = "accor_width_web"
        >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: "white", transform: "scale(1.8)" }} />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
            >
                <Typography sx={{ width: "100%", flexShrink: 0 }} style={{ fontSize: "large" }}>
                    <AddShoppingCartOutlinedIcon
                        style={{ transform: "scale(1.8)", color: "#7d46f7" }}
                    />
                    &nbsp;&nbsp;&nbsp;No offers yet
                </Typography>
            </AccordionSummary>
            <AccordionDetails style={{ backgroundColor: "#1c1929" , borderRadius: "10px" }}>
                <Typography style={{ fontSize: "larger" }}>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet
                    egestas eros, vitae egestas augue. Duis vel est augue.
                </Typography>
            </AccordionDetails>
        </Accordion>
        </div>
    );
};

export default NoOffersYet;
