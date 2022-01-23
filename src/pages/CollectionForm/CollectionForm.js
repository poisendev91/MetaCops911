import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Checkbox from "@mui/material/Checkbox";
import RadioGroup from "@mui/material/RadioGroup";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

//CSS
import "./CollectionForm.css";

export default function collectionForm() {
    const [isMultipleFilesLimit, setMultipleFilesLimit] = useState(false);
    const [isDoxedVideo, setDoxedVideo] = useState(false);
    const [isFaceImageFile, setFaceImageFile] = useState(false);

    const handleMultipleFilesChange = (e) => {
        if (Array.from(e.target.files).length > 5) {
            e.preventDefault();
            setMultipleFilesLimit(true);
            e.target.value = "";
        }
    };
    const handleDoxedVideo = (e) => {
        if (Array.from(e.target.files).length === 1) {
            e.preventDefault();
            setDoxedVideo(true);
        }
    };
    const handleFaceImage = (e) => {
        if (Array.from(e.target.files).length === 1) {
            e.preventDefault();
            setFaceImageFile(true);
        }
    };
    return (
        <div className="collection___form___main">
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div>
                    <Typography
                        component="h2"
                        variant="h3"
                        my={3}
                        className="heading___collection__form"
                    >
                        Collection Application Form
                    </Typography>
                    <form className="collection___form" method="post">
                        <Grid container spacing={2}>
                            <Grid item xs={12} mb={2}>
                                <TextField
                                    autoComplete="cname"
                                    name="collectionName"
                                    variant="standard"
                                    required
                                    fullWidth
                                    id="collectionName"
                                    label="Collection Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} mb={2}>
                                <TextField
                                    variant="standard"
                                    required
                                    fullWidth
                                    rows={4}
                                    multiline
                                    id="descriptionDetails"
                                    label="Description details"
                                    name="descriptionDetails"
                                    autoComplete="description"
                                />
                            </Grid>
                            <Grid item xs={12} className="logo___upload___div">
                                <label className="logo___upload___text">Upload your Logo</label>
                                <input accept="image/*" id="raised-button-file" type="file" />
                            </Grid>
                            <Grid item xs={12} className="logo___upload___div">
                                <label className="logo___upload___text">
                                    Upload MINT Hash List
                                </label>
                                <input
                                    accept="application/JSON"
                                    id="raised-button-file"
                                    type="file"
                                />
                            </Grid>
                            <Grid item xs={12} className="logo___upload___div">
                                <label className="logo___upload___text">Banner Image</label>
                                <input accept="image/*" id="raised-button-file" type="file" />
                            </Grid>
                            <Grid item xs={12} mb={2}>
                                <TextField
                                    autoComplete="twitter"
                                    name="twitter"
                                    variant="standard"
                                    required
                                    fullWidth
                                    id="twitter"
                                    label="Twitter"
                                />
                            </Grid>
                            <Grid item xs={12} mb={2}>
                                <TextField
                                    autoComplete="website"
                                    name="website"
                                    variant="standard"
                                    required
                                    fullWidth
                                    id="website"
                                    label="Website"
                                />
                            </Grid>
                            <Grid item xs={12} mb={2}>
                                <TextField
                                    autoComplete="instagram"
                                    name="instagram"
                                    variant="standard"
                                    required
                                    fullWidth
                                    id="instagram"
                                    label="Instagram"
                                />
                            </Grid>
                            <Grid item xs={12} className="logo___upload___div">
                                <label className="logo___upload___text">
                                    Upload 5 nfts of your collection
                                </label>
                                <input
                                    accept="image/*"
                                    id="raised-button-file"
                                    type="file"
                                    onChange={handleMultipleFilesChange}
                                    multiple
                                />
                            </Grid>
                            {isMultipleFilesLimit && (
                                <Grid item xs={12}>
                                    <p
                                        style={{
                                            fontSize: "10px",
                                            color: "#ff7979",
                                            textAlign: "center",
                                        }}
                                    >
                                        Max limit Reached
                                    </p>
                                </Grid>
                            )}
                            <Grid item xs={12} className="logo___upload___div">
                                <label className="logo___upload___text">Upload face image</label>
                                <input
                                    accept="image/*"
                                    id="raised-button-file"
                                    type="file"
                                    onChange={handleFaceImage}
                                />
                            </Grid>
                            <Grid item xs={12} className="logo___upload___div">
                                <label className="logo___upload___text">Upload doxed video</label>
                                <input
                                    accept="video/*"
                                    id="raised-button-file"
                                    type="file"
                                    onChange={handleDoxedVideo}
                                />
                            </Grid>
                            {isDoxedVideo && isFaceImageFile ? (
                                <>
                                    <Grid item xs={12} className="logo___upload___div">
                                        <label className="logo___upload___text">
                                            Upload Second face image
                                        </label>
                                        <input
                                            accept="image/*"
                                            id="raised-button-file-2"
                                            type="file"
                                        />
                                    </Grid>
                                    <Grid item xs={12} className="logo___upload___div">
                                        <label className="logo___upload___text">
                                            Upload Second doxed video
                                        </label>
                                        <input
                                            accept="video/*"
                                            id="raised-button-file-2"
                                            type="file"
                                        />
                                    </Grid>
                                </>
                            ) : (
                                ""
                            )}
                            <Grid item xs={12} mb={2}>
                                <TextField
                                    autoComplete="fname"
                                    name="fullName"
                                    variant="standard"
                                    required
                                    fullWidth
                                    id="fullName"
                                    label="Full Name"
                                />
                            </Grid>
                            <Grid item xs={12} mb={2}>
                                <TextField
                                    autoComplete="country"
                                    name="country"
                                    variant="standard"
                                    required
                                    fullWidth
                                    id="country"
                                    label="Country"
                                />
                            </Grid>
                            <Grid item xs={12} mb={2}>
                                <TextField
                                    autoComplete="email"
                                    name="email"
                                    variant="standard"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email"
                                    type="email"
                                />
                            </Grid>
                            <Grid item xs={12} mb={2} style={{ display: "flex" }}>
                                <label className="checkbox__text__collection">
                                    {" "}
                                    Does / will your project include a profit sharing system ?
                                </label>
                                <RadioGroup
                                    row
                                    aria-label="gender"
                                    className="row-radio-buttons-group"
                                    style={{ width: "18vw" }}
                                >
                                    <FormControlLabel
                                        control={
                                            <Radio value="includeProfitSharing" color="primary" />
                                        }
                                        label="Yes"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Radio
                                                value="notIncludeProfitSharing"
                                                color="primary"
                                            />
                                        }
                                        label="No"
                                    />
                                </RadioGroup>
                            </Grid>
                            <Grid item xs={12} mb={2} style={{ display: "flex" }}>
                                {" "}
                                <FormControlLabel
                                    className="checkbox___terms___collection"
                                    control={<Checkbox />}
                                    label="Do you agree to the terms of service?"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className="collection___button"
                        >
                            Submit
                        </Button>
                    </form>
                </div>
            </Container>
        </div>
    );
}
