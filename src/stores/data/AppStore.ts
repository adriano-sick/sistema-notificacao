import { defineStore } from "pinia";

interface InternalStoreStateType {
    // appList: [];
}

export const useAppStore = defineStore('AppStore',{
    state: (): InternalStoreStateType => ({}),
    getters: {
    },
    actions: {
    }
});