import {atom, selector} from "recoil";
import {KeyMetricsQuery, StockOverviewQuery} from "../queries/PullBack";


export interface KeyMetrics {
    freeCashFlow: number;
    freeCashFlowPerShare: number;
    priceToFreeCashFlow: number;
}

export interface StockOverview {
    price: number;
    marketCap: number;
}


export const tickerState = atom<string>({
    key: 'Ticker',
    default: 'AAPL',
});

export const keyMetricsQuery = selector({
    key: 'KeyMetrics',
    get: async ({get}) : Promise<KeyMetrics>  => {
        return await KeyMetricsQuery(get(tickerState));
    }
});


export const stockOverviewSelector = selector({
    key: 'StockOverview',
    get: async ({get}): Promise<StockOverview> => {
        return await StockOverviewQuery(get(tickerState));
    }
});
