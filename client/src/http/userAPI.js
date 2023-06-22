import {/*$authHost,*/ $host} from "./index";
import jwtDecode from "jwt-decode";

export const login = async (username, password) =>{
    const response = await $host.post('api/user/login',{username,password})
    return jwtDecode(response.data)
}
export const check = async () =>{
}