import * as React from "react";
import TextField from "@material-ui/core/TextField";
import {useRecoilValue} from "recoil";
import {intrinsicValueInput} from "../../states/IntrinsicInput";
import {earnings, freeCashFlow, marketCap, stockPrice} from "../../states/StockStats";

export const OutputDFCF: React.FC = () => {


        const intrinsicValueInputParams = useRecoilValue(intrinsicValueInput);
        const marketCapValue = useRecoilValue(marketCap);
        const earningsValue = useRecoilValue(earnings);
        const stockPriceValue = useRecoilValue(stockPrice);
        const freeCashFlowValue = useRecoilValue(freeCashFlow);

        if (marketCapValue === null || earningsValue === null || stockPriceValue == null)
            return null

        const sharesOutstanding = stockPriceValue / marketCapValue;
        const earningPerShare = earningsValue / sharesOutstanding

        const horizonYears = 10.0
        const futureEarningsPerShare = earningPerShare * Math.pow(1.0 + (intrinsicValueInputParams.growth / 100.0), horizonYears)
        const intrinsicValue = futureEarningsPerShare * intrinsicValueInputParams.terminalMultiple * Math.pow((1.0 - intrinsicValueInputParams.expectedReturn), horizonYears)


    return <TextField id="intrinsic-value" label="intrinsicValue" value={intrinsicValue}/>;

}
