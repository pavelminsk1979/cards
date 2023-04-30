import {instance} from "../../common/api/apiInstans";


export const authApi = {
    register () {
        const payload:RegisterType = {email:'pavelminsk1979@mail.ru',
            password:'1979@pav'}
    return instance.post('auth/register',payload)
}
}

type RegisterType = {
    email:string
    password:string
}