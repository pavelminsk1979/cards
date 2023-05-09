import {instance} from "../../common/api/instansAxios";




export const authApi = {
    register(payload: RegisterType) {
        return instance.post<RegisterResponseType>('auth/register', payload)
    },
    login(payload:LoginType) {
        return instance.post<LoginResponseType>('auth/login',payload)
    },
	logOut(payload:{}){
		return instance.delete<LogOutType>('auth/me',payload)
	}
}

export type LogOutType = {
	info:string
	error:string
}

export type RegisterType = {
	email:string
	password:string
	confirmPassword:string
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