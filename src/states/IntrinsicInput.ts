import {atom} from "recoil";

interface IntrinsicValueInput {
    growth: number;
    expectedReturn: number;
    terminalMultiple: number;
}

export const intrinsicValueInput = atom<IntrinsicValueInput | null>({
    key: 'IntrinsicValueInput',
    default: null
});
