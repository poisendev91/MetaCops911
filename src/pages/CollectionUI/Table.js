import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('1904921809148', 159, 6.0, 24, 4.0),
    createData('5810958190590185', 237, 9.0, 37, 4.3),
    createData('8159509185901', 262, 16.0, 24, 6.0),
    createData('919857817589245', 305, 3.7, 67, 4.3),
    createData('94141489018', 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
    return (
        <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table" style={{ background: "#120c18" }}>
                <TableHead>
                    <TableRow>
                        <TableCell><p style={{ color: 'red' }}>TRANSACTION ID</p></TableCell>
                        <TableCell align="right"><p style={{ color: 'red' }}>TRANSACTION TYPE</p></TableCell>
                        <TableCell align="right"><p style={{ color: 'red' }}>TIME</p></TableCell>
                        <TableCell align="right"><p style={{ color: 'red' }}>TOTAL AMOUNT</p></TableCell>
                        <TableCell align="right"><p style={{ color: 'red' }}>Mint address</p></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                <p style={{ color: 'white' }}>{row.name}</p>
                            </TableCell>
                            <TableCell align="right"><p style={{ color: 'white' }}>{row.calories}</p></TableCell>
                            <TableCell align="right"><p style={{ color: 'white' }}>{row.fat}</p></TableCell>
                            <TableCell align="right"><p style={{ color: 'white' }}>{row.carbs}</p></TableCell>
                            <TableCell align="right"><p style={{ color: 'white' }}>{row.protein}</p></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}