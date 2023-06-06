//import {/*$authHost,*/ $host} from "./index";
//import jwtDecode from "jwt-decode";

export const login = async (username, password) =>{
    //const data = {family_name: "Иванов",name: "Иван", surname: "Иванович" ,role: 'ROOT'}
    //return data
    //const response = await $host.post('api/auth/login',{username,password})
    //const response = {family_name: "Иванов",name: "Иван", surname: "Иванович" ,role: 'ROOT'}
    //const response = {username,password}
    return {username,password}
}

export const check = async () =>{
//    const response = await $host.post('api/user/login')
//    return response
}