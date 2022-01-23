import React from "react";
import "./Create.css";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import InfoIcon from "@mui/icons-material/Info";
import ListIcon from "@mui/icons-material/List";
import StarIcon from "@mui/icons-material/Star";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import Button from '@mui/material/Button';

import ModalComp from "./ModalComp/ModalComp";
import ToggleComp from "./ToggleComp/ToggleComp";

const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
        color: "white",
    },
    "& .MuiInput-underline:after": {
        borderBottomColor: "white",
    },
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderColor: "white",
            fontSize: "16px",
        },
        "&:hover fieldset": {
            borderColor: "white",
        },
        "&.Mui-focused fieldset": {
            borderColor: "white",
        },
    },
});

const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: "#f5f5f9",
        color: "rgba(0, 0, 0, 0.87)",
        maxWidth: 220,
        fontSize: theme.typography.pxToRem(16),
        border: "1px solid #dadde9",
    },
}));

const items = [
    {
        name: "Properties",
        content: "Textual traits that show up as rectangles",
        icon: <ListIcon style={{ transform: "scale(1.8)", color: "#7d46f7" }} />,
    },
    {
        name: "Levels",
        content: "Numerical traits that show as a progress bar",
        icon: <StarIcon style={{ transform: "scale(1.8)", color: "#7d46f7" }} />,
    },
    {
        name: "Stats",
        content: "Numerical traits that just show as numbers",
        icon: <EqualizerIcon style={{ transform: "scale(1.8)", color: "#7d46f7" }} />,
    },
];

const toggleItems = [
    {
        name: "Unlockable Content",
        content: "Include unlockable content that can only be revealed by the owner of the item.",
        icon: <LockOpenIcon style={{ transform: "scale(1.8)", color: "#7d46f7" }} />,
    },
    {
        name: "Explicit & Sensitive Content",
        content: "Set this item as explicit and sensitive content",
        icon: <ReportProblemIcon style={{ transform: "scale(1.8)", color: "#7d46f7" }} />,
    },
];

const Create = () => {
    const [value, setValue] = React.useState("");

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <div className="create_container">
            <Container maxWidth="md" style = {{borderBottom:"1px solid #e5e8eb" , padding:"20px 0"}}>
                <h1 className="create_head">Create new item</h1>
                <p className="create_label_image">Image, Video, Audio, or 3D Model</p>
                <small>
                    File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF.
                    Max size: 100 MB
                </small>
                <div className="image_upload_create"></div>
                <div className="create_input_field">
                    <label className="common_create_label_class">Name</label>
                    <CssTextField id="outlined-password-input" label="Name" type="text" required />
                </div>
                <div className="create_input_field">
                    <label className="common_create_label_class">External Link</label>
                    <small>
                        Altdeck will include a link to this URL on this item's detail page, so that
                        users can click to learn more about it. You are welcome to link to your own
                        webpage with more details.
                    </small>
                    <CssTextField
                        id="outlined-password-input"
                        label="External Link"
                        type="text"
                        required
                    />
                </div>
                <div className="create_input_field">
                    <label className="common_create_label_class">Description</label>
                    <small>
                        The description will be included on the item's detail page underneath its
                        image. Markdown syntax is supported.
                    </small>
                    <CssTextField
                        id="outlined-multiline-flexible"
                        label="Description"
                        multiline
                        maxRows={4}
                        value={value}
                        onChange={handleChange}
                    />
                </div>
                <div className="create_input_field">
                    <label className="common_create_label_class">Collection</label>
                    <small style={{ display: "flex", gap: "10px" }}>
                        This is the collection where your item will appear.
                        <HtmlTooltip
                            placement="top"
                            title={
                                <React.Fragment>
                                    <Typography color="inherit">
                                        Moving items to a different collection may take up to 30
                                        minutes. You can manage your collections here.
                                    </Typography>
                                </React.Fragment>
                            }
                        >
                            <InfoIcon style={{ transform: "scale(1.8)", color: "#7d46f7" }} />
                        </HtmlTooltip>
                    </small>
                    <CssTextField
                        id="outlined-password-input"
                        label="Collection"
                        type="text"
                        required
                    />
                </div>
                {items.map((item, idx) => (
                    <ModalComp key={idx} name={item.name} content={item.content} icon={item.icon} />
                ))}
                {toggleItems.map((item, idx) => (
                    <ToggleComp
                        ket={idx}
                        name={item.name}
                        content={item.content}
                        icon={item.icon}
                    />
                ))}

                <div className="create_input_field">
                    <label className="common_create_label_class">Supply</label>
                    <small style={{ display: "flex", gap: "10px" }}>
                        The number of copies that can be minted. No gas cost to you! Quantities
                        above one coming soon.
                        <HtmlTooltip
                            placement="top"
                            title={
                                <React.Fragment>
                                    <Typography color="inherit">
                                        Moving items to a different collection may take up to 30
                                        minutes. You can manage your collections here.
                                    </Typography>
                                </React.Fragment>
                            }
                        >
                            <InfoIcon style={{ transform: "scale(1.8)", color: "#7d46f7" }} />
                        </HtmlTooltip>
                    </small>
                    <CssTextField
                        id="outlined-password-input"
                        label="Supply"
                        type="text"
                        required
                    />
                </div>
                <div className="create_input_field">
                    <label className="common_create_label_class">Blockchain</label>
                    <CssTextField
                        id="outlined-password-input"
                        label="Blockchain"
                        type="text"
                        required
                    />
                </div>
                <Button variant="contained" style = {{fontSize:"16px"}}>Create</Button>
            </Container>
        </div>
    );
};

export default Create;
