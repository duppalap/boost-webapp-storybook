import {TextField } from "@mui/material";
import { TextFieldProps } from "@mui/material";







export default function BasicTextField ({ ...other}: TextFieldProps) {
    return (

        <TextField required={true} {...other}


            //{type}  Want to set this probs not sure able the syntax
            // {required}
            // {disabled}
        > Field</TextField>

    )

}





