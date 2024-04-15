import axios from 'axios';

const API_URL = 'http://localhost:3100/api/'

export const loginFun = async (userData) =>{
    const response = await axios.post(`${API_URL}/login`,userData,{
        headers:{
            "Content-Type":'application/json',
            "Accept":'application/json'
        }
    });
    const data = await response.data;
    return data;
}


export const registerFun = async (userData) =>{
    const response = await axios.post(`${API_URL}/register`,userData,{
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json"
        }
    })

    const data = await response.data;

    return data;
}


const services ={
    loginFun,
    registerFun
}

export default services;