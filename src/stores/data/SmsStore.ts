import type { PaginationModel } from "@/corelib/models/PaginationModel";
import type { SmsModel } from "@/corelib/models/SmsModel";
import { defineStore } from "pinia";

interface InternalStoreStateType {
smsList: Array<SmsModel>;
// pagination: PaginationModel;
}

export const useSmsStore = defineStore('SmsStore',{
    state: (): InternalStoreStateType => ({
        smsList: []
        // pagination: {
        //     page: 1,
        //     currentRecord: 0,
        //     numberOfPages: 0,
        //     totalPageRecords: 10,
        //     totalRecords: 10
        // }
    }),
    getters: {
        getSmsList: (state: InternalStoreStateType): Array<SmsModel> =>
            state.smsList,
        // Pagination: (state: InternalStoreStateType): PaginationModel =>
        //     state.pagination
    },
    actions: {
    }
});