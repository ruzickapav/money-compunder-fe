import {atom} from "recoil";

interface IntrinsicValueInput {
    growth: number;
    expectedReturn: number;
    terminalMultiple: number;
}

export const intrinsicValueInput = atom<IntrinsicValueInput>({
    key: 'IntrinsicValueInput'
});
