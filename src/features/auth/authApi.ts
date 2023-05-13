import {instance} from "../../common/api/instansAxios";


export const authApi = {
    register(payload: RegisterType) {
        return instance.post<RegisterResponseType>('auth/register', payload)
    },
    login(payload: LoginType) {
        return instance.post<LoginResponseType>('auth/login', payload)
    },
    logOut() {
        return instance.delete<CommonResponseType>('auth/me')
    },
    forgot(payload: ForgotType) {
        return instance.post<FogotResponseType>('auth/forgot', payload)
    },
    editProfile(payload: EditProfileType) {
        return instance.put('auth/me', payload)
    },
    setNewPassword(payload:any){
        return instance.post<CommonResponseType>('auth/set-new-password',payload)
    }
}
export type FogotResponseType = {
    info: string
    success: boolean
    answer: boolean
    html: boolean
}

export type EditProfileResponseType = {
    updatedUser: LoginResponseType
    error?: string
    token: string
    tokenDeathTime: number
}

export type EditProfileType = {
    name?: string,
    avatar?: string
}

export type ForgotType = {
    email: string
    from: string
    message: string
}

export type CommonResponseType = {
    info: string
    error: string
}

export type RegisterType = {
    email: string
    password: string
    confirmPassword: string
}

export type LoginType = {
    email: string
    password: string
    rememberMe: boolean
}

export type RegisterResponseType = {
    addedUser: UserType
}

type UserType = Omit<LoginResponseType, 'token' | 'tokenDeathTime'>

export type LoginResponseType = {
    avatar?: string;
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
