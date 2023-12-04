import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(index, ownerName, landDetails, installmentPlan, societyName) {
    return { index, ownerName, landDetails, installmentPlan, societyName };
}

const rows = [
    createData('5', "Dinesh", "It is located at the cornor. Near to super market.", 24, 4.0),
    createData('4', 237, 9.0, 37, 4.3),
    createData('3', 262, 16.0, 24, 6.0),
    createData('2', 305, 3.7, 67, 4.3),
    createData('1', 356, 16.0, 49, 3.9),
];

export default function CustomizedTables() {
    return (
        <div className='m-auto overflow-auto'>
            <TableContainer className='m-auto overflow-auto' component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Index</StyledTableCell>
                            <StyledTableCell align="center">Owner Name</StyledTableCell>
                            <StyledTableCell align="center">Land Details)</StyledTableCell>
                            <StyledTableCell align="center">Installment Plan(Yes/No)</StyledTableCell>
                            <StyledTableCell align="center">Society Name</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, index) => (
                            <StyledTableRow key={row.index}>
                                <StyledTableCell>{index}</StyledTableCell>
                                <StyledTableCell align="center">{row.ownerName}</StyledTableCell>
                                <StyledTableCell component="th" scope="row" align="center" sx={{ minWidth: 400 }}>{row.landDetails}</StyledTableCell>
                                <StyledTableCell align="center">{row.installmentPlan}</StyledTableCell>
                                <StyledTableCell align="center">{row.societyName}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}