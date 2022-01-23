import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 200,
        },
    },
};

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];

function getStyles(item, itemName, theme) {
    return {
        fontWeight:
            itemName.indexOf(item) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

export default function MultipleSelectChip(props) {
    const theme = useTheme();
    const [itemName, setItemName] = React.useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setItemName(
            // On autofill we get a the stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <div>
            <FormControl sx={{ m: 1, width: 250 }}>
                <InputLabel id="demo-multiple-chip-label"><p style={{ color: 'white' }}>{props.label}</p></InputLabel>
                <Select
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    multiple
                    value={itemName}
                    onChange={handleChange}
                    input={<OutlinedInput id="select-multiple-chip" color="secondary" label={<p>Background</p>} />}
                    renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, }}>
                            {selected.map((value) => (
                                <Chip key={value} label={value} style={{ background: 'white' }} />
                            ))}
                        </Box>
                    )}
                    MenuProps={MenuProps}
                >
                    {props.data?.map((item) => (
                        <MenuItem
                            key={item}
                            value={item}
                            style={getStyles(item, itemName, theme)}
                        >
                            {item}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}