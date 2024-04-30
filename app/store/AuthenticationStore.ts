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
            setToken: action,
            refreshAccessToken: action
        })
    }

    setToken(idtoken: string, accesstoken:string, refreshtoken:string ){
        this.idtoken = idtoken
        this.accesstoken = accesstoken
        this.refreshtoken = refreshtoken
    }

    refreshAccessToken(accesstoken: string){
        this.accesstoken = accesstoken;
    }

    get getIdToken(){
        return this.idtoken;
    }

    get getAccessToken(){
        return this.accesstoken;
    }

    get getRefreshToken(){
        return this.refreshtoken;
    }
}

export const  AuthenticationStore = new Authentication();