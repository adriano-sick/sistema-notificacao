import type { AxiosInstance } from "axios";
import axios from "axios";

export default class ApiBase {
    protected instance: AxiosInstance;
    private readonly baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
        this.instance = this.getInstance(baseUrl);
    }

    private getInstance(baseUrl: string){
        return axios.create({
            baseURL: baseUrl,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        });
    }
}