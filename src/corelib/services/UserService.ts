import GenericApi from "../api/GenericApi";
import type { UserModel } from "../models/UserModel";
import type { UserRequest } from "../requests/UserRequest";

export default class UserService extends GenericApi {

    async getUser(
        userEmail: string | null,
        password: string | null
    ): Promise<UserModel>{
        const request: UserRequest = {
            login: userEmail,
            password: password
        }

        return await this.buscarValor<UserModel, UserRequest>(
            'url/swagger',
            request
        )
    }
}