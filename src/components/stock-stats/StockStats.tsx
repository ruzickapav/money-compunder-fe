import * as React from 'react';
import {Box} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import {useRecoilState} from "recoil";
import {earnings, freeCashFlow, marketCap, stockPrice} from "../../states/StockStats";


export const StockStats: React.FC = () => {
    const [marketCapValue, setMarketCap] = useRecoilState(marketCap);
    const [earningsValue, setEarnings] = useRecoilState(earnings);
    const [stockPriceValue, setStockPrice] = useRecoilState(stockPrice);
    const [freeCashFlowValue, setFreeCashFlow] = useRecoilState(freeCashFlow);

    const onMarketCapChange = (value: string) => {
        setMarketCap(Number(value))
    };

    const onEarningsChange = (value: string) => {
        setEarnings(Number(value));
    };
    const onStockPriceChange = (value: string) => {
        setStockPrice(Number(value));
    };
    const onFreeCashFlowChange = (value: string) => {
        setFreeCashFlow(Number(value));
    };

    return (
        <Box component="form">
            <div>
                <TextField id="market-cap" label="Market Cap" variant="standard" type="number"
                           onChange={(event) => {
                               onMarketCapChange(event.target.value)
                           }}/>
            </div>
            <div>
                <TextField id="current-price" label="Price" variant="standard" onChange={(event) => {
                    onEarningsChange(event.target.value)
                }}/>
            </div>
            <div>
                <TextField id="earnings" label="Earnings" variant="standard" onChange={(event) => {
                    onStockPriceChange(event.target.value)
                }}/>
            </div>
            <div>
                <TextField id="free-cash-flow" label="Free Cash Flow" variant="standard"
                           onChange={(event) => {
                               onFreeCashFlowChange(event.target.value)
                           }}/>
            </div>
        </Box>
    );
}
