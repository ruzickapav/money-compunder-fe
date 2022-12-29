import {atom, selector} from "recoil";
import {GetTokenQuery} from "../queries/PullBack";

interface Credentials {
    email: string,
    password: string
}

export const credentialsState = atom<Credentials | null>({
    key: 'Credentials',
    default: null,
});

export const tokenStateQuery = selector({
    key: 'OAuthToken',
    get: ({get}) => async () => {
        const credentials = get(credentialsState)
        if (credentials === null) return null
        const response = await GetTokenQuery(credentials);
        return response.token_id;
    }
});
