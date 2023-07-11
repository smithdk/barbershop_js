import {$host} from "./index";

export const fetchAllObjects = async () =>{
    return  await $host.get('api/object/')
}