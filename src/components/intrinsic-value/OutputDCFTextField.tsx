import * as React from "react";
import {useRecoilValue} from "recoil";
import {intrinsicValueInput} from "../../states/IntrinsicInput";
import {keyMetricsQuery, stockOverviewSelector} from "../../states/StockStats";
import {NumericFormat} from 'react-number-format';
import {intrinsicValueCalculation} from '../../utils/IntrinsicValueCalculation';

export const OutputDFCF: React.FC = () => {
    const keyMetrics = useRecoilValue(keyMetricsQuery);
    const stockOverviewValue = useRecoilValue(stockOverviewSelector);
    const intrinsicValueInputParams = useRecoilValue(intrinsicValueInput);

    let value = null;

    if (!(stockOverviewValue.marketCap === null || keyMetrics.freeCashFlow === null || stockOverviewValue.price == null || intrinsicValueInputParams === null)) {

        const input = {
            growthPercent: intrinsicValueInputParams.growth,
            terminalMultiple: intrinsicValueInputParams.terminalMultiple,
            valuePerShare: keyMetrics.freeCashFlowPerShare,
            horizonYears: 10.0,
            expectedReturnPercent: intrinsicValueInputParams.expectedReturn
        };
        value = intrinsicValueCalculation(input);
    }

    return <NumericFormat value={value} allowLeadingZeros thousandSeparator="," decimalScale={2}/>
}
