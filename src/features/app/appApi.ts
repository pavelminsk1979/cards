import {instance} from "../../common/api/instansAxios";
import {LoginResponseType} from "../auth/authApi";

export const appApi = {
    initializeApp(payload: {}) {
        return instance.post<LoginResponseType>('auth/me', payload)
    }
}


/*
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
}*/
