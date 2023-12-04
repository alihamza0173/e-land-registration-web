import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useForm } from "react-hook-form";

import { collectionConstants } from '../../constants';
import { updateCollection } from '../../config/firebaseOperations/getDocs';
import { showToast } from '../shared/Toast';

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

    const handleSubmit = async (e) => {
        console.log("form submitted");
        e.preventDefault();
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);
        console.log("form-data ", formProps);
        const getRes = await updateCollection(collectionConstants.LANDS);
        if (!getRes) {
            showToast("something went wrong!", "error");
            setIsSpinning(false);
            return;
        }
        updateCollection(collectionConstants.LANDS, (Math.random() * 1231345645), formProps).then(
            (res) => {
                showToast("Land Added Successfully", "success");
                setFromEnabler(false);
                setIsSpinning(false);
            }
        )
    };



    return (
        <div className='m-auto overflow-auto px-0 mx-0'>
            <form onSubmit={(e) => { handleSubmit(e) }} class="row g-3 px-0 mx-0" >
                <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">Owner Name</label>
                    <input type="text" name='ownerName' class="form-control" id="inputEmail4" />
                </div>
                <div class="col-md-6">
                    <label for="inputPassword4" class="form-label">Land Id</label>
                    <input type="text" name='landId' class="form-control" id="inputPassword4" />
                </div>
                <div class="col-12">
                    <label for="inputAddress" class="form-label">Land Address</label>
                    <input type="text" name='landAddress' class="form-control" id="inputAddress" placeholder="1234 Main St" />
                </div>
                <div class="col-12">
                    <label for="inputAddress2" class="form-label">Land Details</label>
                    <input type="text" name='landDetails' class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                </div>
                <div class="col-md-6">
                    <label for="inputCity" name='city' class="form-label">City</label>
                    <input type="text" class="form-control" id="inputCity" />
                </div>
                <div class="col-md-3">
                    <label for="inputZip" name='isInstallmentPlan' class="form-label">Installment Plan</label>
                    <input type="text" class="form-control" placeholder='yes/no' id="inputZip" />
                </div>
                <div class="col-md-3">
                    <label for="inputZip" class="form-label">Zip</label>
                    <input type="text" name='zip' class="form-control" id="inputZip" />
                </div>
                <div class="col-12">
                    <button type="submit" class="btn btn-primary">Sign in</button>
                </div>
            </form>
        </div>
    );
}