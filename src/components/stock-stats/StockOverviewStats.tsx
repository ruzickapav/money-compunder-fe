import * as React from 'react';

import {useRecoilValue} from "recoil";
import {stockOverviewSelector} from "../../states/StockStats";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";


export const StockOverviewStats: React.FC = () => {


    const stockOverviewValue = useRecoilValue(stockOverviewSelector);

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
                        <TableCell component="th" scope="row">'Price'</TableCell>
                        <TableCell align="right">${stockOverviewValue?.price}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th" scope="row">'Market Capitalization'</TableCell>
                        <TableCell align="right">${stockOverviewValue?.marketCap}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}
