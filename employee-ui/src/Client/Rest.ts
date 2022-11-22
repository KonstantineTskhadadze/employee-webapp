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


export const getEmployees = async (): Promise<AxiosResponse<Array<Employee>, any>> => await api.get('get');

export const postEmployee = async (e: Employee) => await api.post('post', e)
    .then(e => console.log(e))
    .catch(e => console.error(e))

export const removeEmployee = async (e: number) => await api.delete(`delete/${e}`)
    .then(e => console.log(e))
    .catch(e => console.log(e))
