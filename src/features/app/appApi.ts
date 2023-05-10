import {instance} from "../../common/api/instansAxios";

export const appApi = {
    initializeApp(payload: {}) {
        return instance.post<initializeAppType>('auth/me', payload)
    }
}


export type initializeAppType = {
	_id: string;
	email: string;
	rememberMe: boolean;
	isAdmin: boolean;
	name: string;
	verified: boolean;
	publicCardPacksCount: number;
	created: string;
	updated: string;
	__v: number;
	token: string;
	tokenDeathTime: number;
	avatar: null|string;
    error?: string;
}