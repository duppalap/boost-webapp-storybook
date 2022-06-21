import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import {TextFieldProps} from "@mui/material";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';


export default function InputIcon({...other}: TextFieldProps) {
    return (

        <TextField  {...other} InputProps={{
            startAdornment: (
                <InputAdornment position="start">
                    <AttachMoneyIcon/>
                </InputAdornment>
            ),
        }}
                    variant="standard"
        > </TextField>


    )

}
