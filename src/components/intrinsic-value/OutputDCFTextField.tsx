import * as React from "react";
import {useRecoilValue} from "recoil";
import {intrinsicValueInput} from "../../states/IntrinsicInput";
import {keyMetricsQuery, stockOverviewSelector} from "../../states/StockStats";
import {TextField} from "@mui/material";

export const OutputDFCF: React.FC = () => {
    const keyMetrics = useRecoilValue(keyMetricsQuery);
    const stockOverviewValue = useRecoilValue(stockOverviewSelector);
    const intrinsicValueInputParams = useRecoilValue(intrinsicValueInput);

    let value = null;

    if (!(stockOverviewValue.marketCap === null || keyMetrics.freeCashFlow === null || stockOverviewValue.price == null || intrinsicValueInputParams === null)) {
        const horizonYears = 10.0
        const futureEarningsPerShare = keyMetrics.freeCashFlowPerShare * Math.pow(1.0 + (intrinsicValueInputParams.growth / 100.0), horizonYears)
        console.log("Earnings per share after 10 years")
        value = futureEarningsPerShare * intrinsicValueInputParams.terminalMultiple * Math.pow((1.0 - intrinsicValueInputParams.expectedReturn), horizonYears)
    }

    return <TextField id="intrinsic-value" label="intrinsicValue" value={value}/>;
}
