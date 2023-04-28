import type { UserModel } from "@/corelib/models/UserModel";
import UserService from "@/corelib/services/UserService";
import { defineStore } from "pinia";

interface InternalStoreStateType {
    userInfo: UserModel;
}

export const useUserStore = defineStore('UserStore',{
    state: (): InternalStoreStateType => ({  
        userInfo: {              
            userId: null,
            userName: null,
            userPassword: null,
            userEmail: null
        }
    }),
    getters: {
        getUserInfo: (state: InternalStoreStateType): UserModel =>
            state.userInfo
    //    UserInfo: (state: UserModel) => state,
    //    UserId: (state) => state.userId,
    //    UserName: (state) => state.userName,
    //    UserPassword: (state) => state.userPassword,
    //    UserEmail: (state) => state.userEmail
    },
    actions: {
        atribuirUser(value: UserModel): void {
            this.userInfo = value;
        },
        
        getUser: async function (
            email: string,
            password: string
        ): 
            Promise<void> {
            const service = new UserService('url/local');

            try {
                this.atribuirUser(await service.getUser(
                    email, 
                    password
                ));
            } catch {
                return;
            }
        }
    }
});