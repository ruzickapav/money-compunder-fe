import React from 'react';
import {FreeCashFlowStats} from "./components/stock-stats/FreeCashFlowStats";
import {RecoilRoot} from "recoil";
import {Grid} from "@mui/material";
import {StockOverviewStats} from "./components/stock-stats/StockOverviewStats";
import {InputDFCFForm} from "./components/intrinsic-value/InputDFCFForm";
import {OutputDFCF} from "./components/intrinsic-value/OutputDCFTextField";


const App = () => {
    return (
        <RecoilRoot>
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
        </RecoilRoot>
    )
};

export default App;
