import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { getCollection } from '../../config/firebaseOperations/getDocs';

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


export default function CustomizedTables(props) {
    
    const rows = props.users ?? [];
    console.log("rows form user table", rows, props);



    return (
        <div className='m-auto overflow-auto'>
            <TableContainer className='m-auto overflow-auto' component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Index</StyledTableCell>
                            <StyledTableCell align="center">User Name</StyledTableCell>
                            <StyledTableCell align="center">User Email</StyledTableCell>
                            <StyledTableCell align="center">Is Active</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, index) => (
                            <StyledTableRow key={row.index}>
                                <StyledTableCell>{index}</StyledTableCell>
                                <StyledTableCell align="center">{row.userName}</StyledTableCell>
                                <StyledTableCell component="th" scope="row" align="center" sx={{ minWidth: 400 }}>{row.userEmail}</StyledTableCell>
                                <StyledTableCell align="center">{String(row.isActive)}</StyledTableCell>
                                {/* <StyledTableCell align="center">{row.societyName}</StyledTableCell> */}
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}