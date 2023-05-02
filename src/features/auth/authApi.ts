import {instance} from "../../common/api/instansAxios";
import {RegisterType} from "../../components/Registration";
import {LoginType} from "../../components/Login";


export const authApi = {
    register(payload: RegisterType) {
        return instance.post<RegisterResponseType>('auth/register', payload)
    },
    login(payload:LoginType) {
        return instance.post<LoginResponseType>('auth/login',payload)
    }
}

export type RegisterResponseType = {
	addedUser : UserType
}

type UserType = {
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
}

export type LoginResponseType = {
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
}