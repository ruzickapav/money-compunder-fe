import * as React from "react";
import {TextField} from "@material-ui/core"
import {Field, Form, Formik} from "formik";
import {CustomField} from "./CustomField";

interface Values {
    marketCap: number;
    freeCashFlow: number;
    expectedReturn: number;
    currentPrice: number;
}

interface Props {
    onSubmit: (values: Values) => void
}

export const MyForm: React.FC<Props> = ({onSubmit}) => {
    return <Formik initialValues={{marketCap: 0.0, freeCashFlow: 0.0, expectedReturn: 0.0, currentPrice: 0.0}} onSubmit={(values => {
        onSubmit(values)
    })

    }>{({values}) => (
        <Form>
            <div>
                <Field placeholder="Market Cap" name="marketCap" component={CustomField}/>
            </div>
            <div>
                <Field placeholder="Free Cash Flow" name="freeCashFlow" component={CustomField}/>
            </div>
            <div>
                <Field placeholder="Current Price" name="currentPrice" component={CustomField}/>
            </div>
            <div>
                <Field placeholder="Return" name="expectedReturn" component={CustomField}/>
            </div>
            <button type="submit">Submit</button>
        </Form>

    )}</Formik>
}

