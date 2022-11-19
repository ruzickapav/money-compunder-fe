export interface IntrinsicValueInput {
    growthPercent: number
    terminalMultiple: number
    valuePerShare: number
    horizonYears: number,
    expectedReturnPercent: number
}

export const intrinsicValueCalculation = (input: IntrinsicValueInput) : number => {
    const futureEarningsPerShare = input.valuePerShare * Math.pow(1.0 + (input.growthPercent / 100.0), input.horizonYears)
    return  futureEarningsPerShare * input.terminalMultiple * Math.pow(1.0 - (input.expectedReturnPercent / 100), input.horizonYears - 1)
}
