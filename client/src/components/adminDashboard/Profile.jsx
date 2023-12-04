import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { systemConstants } from '../../constants';

export default function TextFieldSizes() {
    const user = JSON.parse(JSON.parse(localStorage.getItem(systemConstants.USER)));
    

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <form class="row g-3">
                <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">User Name</label>
                    <input type="text" class="form-control" id="inputEmail4" value={`${user?.data?.name}`} />
                </div>
                <div class="col-md-6">
                    <label for="inputPassword4" class="form-label" >Email Name</label>
                    <input type="email" class="form-control" id="inputPassword4" readOnly value={`${user?.data?.email}`}/>
                </div>
                <div class="col-12">
                    <label for="inputAddress" class="form-label">Account Address</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="" value={`${user?.data?.address ?? ""}`} />
                </div>
            </form>

        </Box>
    );
}