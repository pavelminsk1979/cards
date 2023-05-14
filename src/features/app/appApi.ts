import {instance} from "../../common/instanceAxios/instansAxios";
import {LoginResponseType} from "../auth/authApi";

export const appApi = {
    initializeApp() {
        return instance.post<LoginResponseType>('auth/me')
    }
}


