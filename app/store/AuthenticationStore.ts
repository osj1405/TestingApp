import { observable, action, computed, makeAutoObservable } from "mobx";

class Authentication {
    idtoken=""
    accesstoken = ""
    refreshtoken = ""

    constructor(){
        makeAutoObservable(this, {
            idtoken: observable,
            accesstoken: observable,
            refreshtoken: observable,
            setToken: action
        })
    }

    setToken(idtoken: string, accesstoken:string, refreshtoken:string ){
        this.idtoken = idtoken
        this.accesstoken = accesstoken
        this.refreshtoken = refreshtoken
    }
}

export const  AuthenticationStore = new Authentication();