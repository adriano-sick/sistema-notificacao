import ApiBase from "./ApiBase";

export default class GenericApi extends ApiBase {

    async buscarValor<T, S>(url: string, argument: S): Promise<T> {
        return await this.instance
            .get<T>(`${url}`,{
                params:{
                ...argument
                }
            })
            .then((response) => {
                return response.data;
            });
    }
}