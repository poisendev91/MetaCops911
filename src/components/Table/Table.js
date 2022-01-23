import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import CollectionName from "./CollectionName/CollectionName"
import SalesChart from "./SalesChart/SalesChart"


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#352d4e",
        color: theme.palette.common.white,
        fontSize: 16,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 16,
        color:theme.palette.common.white,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: "#352d4e",
        color:"white"
    },
    // hide last border
    "&:last-child td, &:last-child th": {
        border: 0,
    },

    "&:nth-of-type(even)": {
        backgroundColor: "#352d4e",
        color:"white"
    },
}));

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function CustomizedTables() {
    return (
        <TableContainer component={Paper}   elevation={0} style = {{backgroundColor:"#352d4e",marginTop:"50px"}}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Collection name</StyledTableCell>
                        <StyledTableCell align="right">Average price<br/><br/>(24h)</StyledTableCell>
                        <StyledTableCell align="right"><ArrowDownwardIcon/> Market cap</StyledTableCell>
                        <StyledTableCell align="right">Volume<br/><br/>(7D)</StyledTableCell>
                        <StyledTableCell align="right">Volume<br/><br/>%(24h)</StyledTableCell>
                        <StyledTableCell align="right">Floor<br/><br/>Price</StyledTableCell>
                        <StyledTableCell align="right">Sales/Chart</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody style = {{color:'white'}}>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell>
                                <CollectionName/>
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.calories}</StyledTableCell>
                            <StyledTableCell align="right">{row.fat}</StyledTableCell>
                            <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                            <StyledTableCell align="right">{row.protein}</StyledTableCell>
                            <StyledTableCell align="right">{row.protein}</StyledTableCell>
                            <StyledTableCell align="right"><SalesChart/></StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
