import {$host} from "./index";

export const fetchAllObjects = async () =>{
    const {data} = await $host.get('api/object/')
    return data

}