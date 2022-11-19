import * as React from "react";
import {Field, Form, Formik} from "formik";
import {CustomField} from "./CustomField";
import {useRecoilState} from "recoil";
import {intrinsicValueInput} from "../../states/IntrinsicInput";


export const InputDFCFForm: React.FC = () => {

    const [, setIntrinsicValueInput] = useRecoilState(intrinsicValueInput);

    return <Formik initialValues={{growth: 10.0, expectedReturn: 10.0, terminalMultiple: 15.0}} onSubmit={(values => {
        setIntrinsicValueInput(values)
    })

    }>{({values}) => (
        <Form>
            <div>
                <Field placeholder="Growth [%]" name="growth" component={CustomField}/>
            </div>
            <div>
                <Field placeholder="Return [%]" name="expectedReturn" component={CustomField}/>
            </div>
            <div>
                <Field placeholder="Terminal Multiple" name="terminalMultiple" component={CustomField}/>
            </div>
            <button type="submit">Submit</button>
        </Form>

    )}</Formik>
}

