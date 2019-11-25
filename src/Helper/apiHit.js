import axios from "axios";
import api from "../Constants/constant";

export  function getRequest(apiUrl){
    console.log("helper")
    const url = api.apiIpPort + api.apiBaseUrl + apiUrl ;

    return axios({
        method:'get',
        url:url,
    })
}

export function postRequest(apiUrl,data){
    const url = api.apiIpPort + api.apiBaseUrl+apiUrl

    return axios({
        method:"post",
        url:url,
        data:data,
        headers:{
            'Content-Type':'application/x-www-form-urlencoded'
        }
    })
}