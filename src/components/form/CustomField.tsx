import * as React from "react";
import {TextField} from "@material-ui/core";
import {FieldProps} from "formik";

interface Props extends FieldProps{
    placeholder: string;
}

export const CustomField: React.FC<Props> = ({placeholder, field}) => {
    return (
    <TextField placeholder={placeholder} {...field}/>
    )
}
