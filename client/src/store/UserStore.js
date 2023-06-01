import {makeAutoObservable} from "mobx";

export default class UserStore{
    constructor() {
/*        this._isAuth = false*/
        this._userRole = 'NONE'
        this._user = {}
        makeAutoObservable(this)
    }
/*
    setAuth(bool){
        this._isAuth = bool
    }
*/

    setUserRole(role){
        this._userRole = role
    }
    setUser(user){
        this._user = user
    }

/*    get isAuth(){
        return this._isAuth
    }*/
    get userRole(){
        return this._userRole
    }
    get user(){
        return this._user
    }
}