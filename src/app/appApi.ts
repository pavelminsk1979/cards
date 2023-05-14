import {instance} from "common/instanceAxios/instansAxios";
import {LoginResponseType} from "features/auth/authApi";

export const appApi = {
    initializeApp() {
        return instance.post<LoginResponseType>('auth/me')
    }
}


