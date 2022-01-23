import React from "react";
import { Grid, Tab, Tabs, Box, Typography, ButtonGroup, Button, TextField } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import Cards from "./Cards";
import SelectInput from "./SelectInput";
import Comment from "./Comment";
import Table from "./Table";
const drawerWidth = 240;

const data = ["Oliver", "Jack", "Jacob", "Charlie", "Thomas", "Harry", "George", "Oliver"];

const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
};

const a11yProps = (index) => {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
};

const LowerDiv = () => {
    const [numberOfGrid, setNumberOfGrid] = React.useState(4);
    const [value, setValue] = React.useState(0);
    const [open, setOpen] = React.useState(true);
    const [openPriceFilter, setOpenPriceFilter] = React.useState(true);
    const [openAttributesFilter, setOpenAttributesFilter] = React.useState(true);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="explore-lower-div">
            <Tabs
                value={value}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
                centered
            >
                <Tab
                    label={<p style={{ color: "white", margin: "2px" }}>items</p>}
                    {...a11yProps(0)}
                />
                <Tab
                    label={<p style={{ color: "white", margin: "2px" }}>Activity</p>}
                    {...a11yProps(1)}
                />
                <Tab
                    label={<p style={{ color: "white", margin: "2px" }}>Comment</p>}
                    {...a11yProps(1)}
                />
            </Tabs>
            <div className="lower-div-tabpanels">
                <Grid
                    item
                    sx={{
                        display: { xs: "none", lg: "block" },
                    }}
                >
                    {open ? (
                        <div className="explore-drawer-open">
                            <div onClick={() => setOpen(false)} className="explore-menu-item">
                                <ArrowBackIcon fontSize="large" color="white" />
                            </div>
                            <div
                                onClick={() => {
                                    openPriceFilter
                                        ? setOpenPriceFilter(false)
                                        : setOpenPriceFilter(true);
                                }}
                                className="explore-menu-item"
                            >
                                <FormatListBulletedIcon fontSize="large" color="white" />
                                {"  "} Price Filter
                            </div>
                            {openPriceFilter ? (
                                <div>
                                    <div className="explore-menu-item">
                                        <SelectInput label="Credits" data={["SOL"]} />
                                        <br />
                                    </div>
                                    <div
                                        className="explore-menu-item"
                                        style={{ flexDirection: "column" }}
                                    >
                                        <div style={{ display: "flex", flexDirection: "row" }}>
                                            <input
                                                type="number"
                                                className="explore-search-input"
                                                placeholder="Min"
                                            />{" "}
                                            __{" "}
                                            <input
                                                type="number"
                                                className="explore-search-input"
                                                placeholder="Max"
                                            />
                                        </div>
                                        <button className="explore-apply-button">Apply</button>
                                    </div>
                                </div>
                            ) : null}
                            <div
                                onClick={() => {
                                    openAttributesFilter
                                        ? setOpenAttributesFilter(false)
                                        : setOpenAttributesFilter(true);
                                }}
                                className="explore-menu-item"
                            >
                                <FormatListBulletedIcon fontSize="large" color="white" />
                                Attributes Filter
                            </div>
                            {openAttributesFilter ? (
                                <div>
                                    <div className="explore-menu-item">
                                        <SelectInput label="Background" data={data} />
                                    </div>
                                    <div className="explore-menu-item">
                                        <SelectInput label="Eyes" data={data} />
                                    </div>
                                    <div className="explore-menu-item">
                                        <SelectInput label="Generation" data={data} />
                                    </div>
                                    <div className="explore-menu-item">
                                        <SelectInput label="Head" data={data} />
                                    </div>
                                    <div className="explore-menu-item">
                                        <SelectInput label="Mouth" data={data} />
                                    </div>
                                    <div className="explore-menu-item">
                                        <SelectInput label="Neck" data={data} />
                                    </div>
                                    <div className="explore-menu-item">
                                        <SelectInput label="Type" data={data} />
                                    </div>
                                </div>
                            ) : null}
                        </div>
                    ) : (
                        <div className="explore-drawer-close" onClick={() => setOpen(true)}>
                            <div className="explore-menu-item" style={{ height: "100%" }}>
                                <ArrowForwardIcon fontSize="large" />
                            </div>
                        </div>
                    )}
                </Grid>
                <Grid item xs={true}>
                    <TabPanel value={value} index={0}>
                        <Grid container spacing={1}>
                            <Grid item xs={12} md={6}>
                                <div>
                                    <input
                                        type="text"
                                        className="explore-search-input"
                                        placeholder="Search"
                                    />
                                </div>
                            </Grid>
                            <Grid item xs={10} md={5}>
                                <select
                                    type="text"
                                    className="explore-search-input"
                                    placeholder="Search"
                                >
                                    <option value="">All Categories</option>
                                    <option value="">Electronics</option>
                                </select>
                            </Grid>
                            <Grid item xs={2} md={1}>
                                <div>
                                    <ButtonGroup color="secondary" style={{ height: "40px" }}>
                                        <Button onClick={() => setNumberOfGrid(4)}>4</Button>
                                        <Button onClick={() => setNumberOfGrid(6)}>6</Button>
                                    </ButtonGroup>
                                </div>
                            </Grid>
                        </Grid>
                        <Cards numberOfGrid={numberOfGrid} />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Table />
                    </TabPanel>
                    <TabPanel value={value} index={2} as={"div"}>
                        <Comment />
                    </TabPanel>
                </Grid>
            </div>
        </div>
    );
};

export default LowerDiv;
