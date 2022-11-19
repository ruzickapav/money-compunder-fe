import axios from "axios";


const baseUrl = 'http://localhost:8082'

export const StockOverviewQuery = async (ticker: string): Promise<StockOverviewDto> => {
    const response = await axios.get<StockOverviewDto>(`${baseUrl}/stocks/${ticker}/overview`)
    console.log(` response status ${response.status}`)
    return response.data
}

export const KeyMetricsQuery = async (ticker: string): Promise<KeyMetricsDto> => {
    const response = await axios.get<KeyMetricsDto>(`${baseUrl}/stocks/${ticker}/key-metrics-ttm`)
    console.log(`Key metrics response status ${response.status}`)
    return response.data
}

interface StockOverviewDto {
    price: number
    marketCap: number
}

interface KeyMetricsDto {
    freeCashFlow: number
    freeCashFlowPerShare: number
    priceToFreeCashFlow: number
}
