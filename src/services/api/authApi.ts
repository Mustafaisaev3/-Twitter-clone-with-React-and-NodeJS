import { LoginFormProps } from "../../components/signin/SingUpModal";
import { axios } from "../../core/axios";

export interface AuthResponceApi {
    status: string,
    data: any
}

export const AuthApi = {
    async signIn(postData: LoginFormProps): Promise<AuthResponceApi> {
        const { data } = await axios.post<AuthResponceApi>('/auth/login', {username: postData.email, password: postData.password})
        return data
    },
    async getMe(): Promise<AuthResponceApi> {
        const { data } = await axios.get<AuthResponceApi>('/users/me')
        return data
    }  
}