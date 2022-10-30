import {atom} from "recoil";

export const marketCap = atom<number | null>({
    key: 'marketCap',
    default: null,
});

export const stockPrice = atom<number | null>({
    key: 'stockPrice',
    default: null,
});

export const earnings = atom<number | null>({
    key: 'earnings',
    default: null,
});

export const freeCashFlow = atom<number | null>({
    key: 'freeCashFlow',
    default: null,
});
