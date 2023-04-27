import type { PaginationModel } from "@/corelib/models/PaginationModel";
import type { SmsModel } from "@/corelib/models/SmsModel";
import { defineStore } from "pinia";

interface InternalStoreStateType {
smsArray: Array<SmsModel>;
pagination: PaginationModel;
}

export const useSmsStore = defineStore('SmsStore',{
    state: (): InternalStoreStateType => ({
        smsArray: [],
        pagination: {
            page: 1,
            currentRecord: 0,
            numberOfPages: 0,
            totalPageRecords: 10,
            totalRecords: 10
        }
    }),
    getters: {},
    actions: {}
});