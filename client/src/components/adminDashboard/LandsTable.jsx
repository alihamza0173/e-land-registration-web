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

// const rows = [
//     createData('5', "Dinesh", "It is located at the cornor. Near to super market.", 24, 4.0),
//     createData('4', 237, 9.0, 37, 4.3),
//     createData('3', 262, 16.0, 24, 6.0),
//     createData('2', 305, 3.7, 67, 4.3),
//     createData('1', 356, 16.0, 49, 3.9),
// ];

export default function CustomizedTables(props) {
    const rows = props?.lands ?? [];
    console.log("rows form user table", rows, props);
    const openLocation = () => {
        // alert("openl location is cliked");
        const randomeLong = Math.floor(Math.random() * 5);
        const randomeLat = Math.floor(Math.random() * 5);
        window.open(`https://www.google.com/maps/place/${parseInt(randomeLat)}°07'24.0%22N+${parseInt(randomeLong)}°07'23.4%22E/@${randomeLat},${randomeLong}/`, "_blank")
    }

    return (
        <div className='m-auto overflow-auto'>
            <TableContainer className='m-auto overflow-auto' component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Index</StyledTableCell>
                            <StyledTableCell align="center" sx={{ minWidth: 120 }}>Owner Name</StyledTableCell>
                            <StyledTableCell align="center" sx={{ minWidth: 120 }}>Land Id</StyledTableCell>
                            <StyledTableCell align="center" sx={{ minWidth: 250 }}>Land Address</StyledTableCell>
                            <StyledTableCell align="center" sx={{ minWidth: 150 }}>Land Details</StyledTableCell>
                            <StyledTableCell align="center" sx={{ minWidth: 120 }}>Installment Plan(Yes/No)</StyledTableCell>
                            <StyledTableCell align="center" sx={{ minWidth: 100 }}>City</StyledTableCell>
                            <StyledTableCell align="center" sx={{ minWidth: 100 }}>Zip Code</StyledTableCell>
                            <StyledTableCell align="center" sx={{ minWidth: 100 }}>Is Active</StyledTableCell>
                            <StyledTableCell align="center" sx={{ minWidth: 150 }}>Actions</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Array.isArray(rows) && rows?.map((row, index) => (
                            <StyledTableRow key={row?.index}>
                                <StyledTableCell>{index}</StyledTableCell>
                                <StyledTableCell align="center">{row?.ownerName}</StyledTableCell>
                                <StyledTableCell component="th" scope="row" align="center" sx={{ minWidth: 400 }}>{row?.landId}</StyledTableCell>
                                <StyledTableCell align="center">{row?.landAddress}</StyledTableCell>
                                <StyledTableCell align="center">{row?.details}</StyledTableCell>
                                <StyledTableCell align="center">{row?.city}</StyledTableCell>
                                <StyledTableCell align="center">{row?.installmentPlan}</StyledTableCell>
                                <StyledTableCell align="center">{row?.zip}</StyledTableCell>
                                <StyledTableCell align="center">{row?.isActive}</StyledTableCell>
                                <StyledTableCell align="center" onClick={openLocation} style={{cursor: "pointer", color: "blue"}} >View on Map</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}