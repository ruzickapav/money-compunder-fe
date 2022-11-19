import * as React from "react";
import {FieldProps} from "formik";
import {TextField} from "@mui/material";

interface Props extends FieldProps{
    placeholder: string;
}

export const CustomField: React.FC<Props> = ({placeholder, field}) => {
    return (
    <TextField placeholder={placeholder} {...field}/>
    )
}
