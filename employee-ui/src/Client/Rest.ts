import axios, {AxiosResponse} from "axios";
import Employee from "../Types/Employee";

export const URL = 'http://localhost:8080/employee-webapp';

export const api = axios.create({
    baseURL: URL,
    headers: {
        post: {
            "Access-Control-Allow-Origin": true
        }
    }
});


export const getEmployees = (): Promise<AxiosResponse<Array<Employee>, any>> => api.get('get');

export const postEmployee = (e: Employee) => api.post('post', e);

export const removeEmployee = (e: number) => api.delete(`delete/${e}`);
