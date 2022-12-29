import * as React from "react";
import {Grid} from "@mui/material";
import {StockOverviewStats} from "./stock-stats/StockOverviewStats";
import {FreeCashFlowStats} from "./stock-stats/FreeCashFlowStats";
import {InputDFCFForm} from "./intrinsic-value/InputDFCFForm";
import {OutputDFCF} from "./intrinsic-value/OutputDCFTextField";
import {useRecoilValue} from "recoil";
import {tokenStateQuery} from "../states/Token";
import SignIn from "./sign-in/SignIn";


export const Router : React.FC = () => {
    const token = useRecoilValue(tokenStateQuery)
        if (token === null) return (<SignIn/>)

     return (
     <Grid container spacing={10}>
         <Grid item>
             <div><StockOverviewStats/></div>
         </Grid>
         <Grid item>
             <FreeCashFlowStats/>
         </Grid>
         <Grid item>
             <InputDFCFForm/>
         </Grid>
         <Grid item>
             <OutputDFCF/>
         </Grid>
     </Grid>
     )
}
