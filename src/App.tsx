import React from 'react';
import {InputDFCFForm} from "./components/intrinsic-value/InputDFCFForm";
import {Grid} from "@material-ui/core";
import {StockStats} from "./components/stock-stats/StockStats";
import {RecoilRoot} from "recoil";
import {OutputDFCF} from "./components/intrinsic-value/OutputDCFTextField";


const App = () => {
    return (
        <RecoilRoot>
            <Grid container spacing={2}>
                <Grid xs={4}>
                    <div style={{textAlign: "center"}}><InputDFCFForm/></div>
                    <div>
                        <OutputDFCF/>
                    </div>
                </Grid>
                <Grid xs={3}>
                    <div>
                        <StockStats/>
                    </div>
                </Grid>
            </Grid>
        </RecoilRoot>

    );
};

export default App;
