import {instance} from "../../common/api/instansAxios";
import {RegisterType} from "../../components/Registration";



export const authApi = {
    register(payload: RegisterType) {
        return instance.post<RegisterResponseType>('auth/register', payload)
    },
    login(payload:LoginType) {
        return instance.post<LoginResponseType>('auth/login',payload)
    }
}

export type LoginType = {
	email: string
	password:string
	rememberMe: boolean
}

export type RegisterResponseType = {
	addedUser : UserType
}

type UserType = Omit<LoginResponseType, 'token'|'tokenDeathTime'>

export type LoginResponseType = {
	_id: string;
	email: string;
	rememberMe: boolean;
	isAdmin: boolean;
	name: string;
	verified: boolean;
	publicCardPacksCount: number; /*это сколько колод на бэке которые я реализова*/
	created: string; /*дата когда я создал этот профиль*/
	updated: string;/* это когда я логинелся */
	__v: number;
	token: string;
	tokenDeathTime: number;
}