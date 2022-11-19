import * as React from 'react';

import {useRecoilValue} from "recoil";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {keyMetricsQuery} from "../../states/StockStats";


export const FreeCashFlowStats: React.FC = () => {

    const keyMetricsValue = useRecoilValue(keyMetricsQuery);

    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Metrics</TableCell>
                        <TableCell>Value</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell component="th" scope="row">'Free Cash Flow'</TableCell>
                        <TableCell align="right">${keyMetricsValue?.freeCashFlow}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th" scope="row">'Free Cash Flow Per Share'</TableCell>
                        <TableCell align="right">${keyMetricsValue?.freeCashFlowPerShare}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th" scope="row">'Price To Free Cash Flow'</TableCell>
                        <TableCell align="right">${keyMetricsValue?.priceToFreeCashFlow}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}
