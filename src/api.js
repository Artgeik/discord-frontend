import axios from "axios";
import { logout } from "./shared/utils/auth";

const apiClient = axios.create({
    baseURL:'https://discord-backend-ufn6.onrender.com',
    timeout:4000
});

apiClient.interceptors.request.use((config)=>{
    const userDetails = localStorage.getItem('user');
    if(userDetails){
        const token = JSON.parse(userDetails).token;
        config.headers.Authorization = `Bearer ${token}`;
    };

    return config;
},(err)=>{
    return Promise.reject(err);
});


//public routes
export const login = async (data) =>{
    try{
        return await apiClient.post('api/auth/login',data);
    }catch(exception){
        return {
            error:true,
            exception,
        };
    };
};

export const register = async (data) =>{
    try{
        return await apiClient.post('api/auth/register',data);
    }catch(exception){
        return {
            error:true,
            exception,
        };
    };
};

//secure routes
export const sendFriendInvitation = async (data) =>{
    try{
        return await apiClient.post('api/friend-invitation/invite',data);
    }catch(exception){
        checkResponseCode(exception);
        return {
            error:true,
            exception,
        };
    }
};

export const acceptFriendInvitation = async (data) =>{
    try{
        return await apiClient.post('api/friend-invitation/accept',data);
    }catch(exception){
        checkResponseCode(exception);
        return {
            error:true,
            exception,
        };
    }
};

export const rejectFriendInvitation = async (data) =>{
    try{
        return await apiClient.post('api/friend-invitation/reject',data);
    }catch(exception){
        checkResponseCode(exception);
        return {
            error:true,
            exception,
        };
    }
};

const checkResponseCode = (exception) => {
    const responseCode = exception?.response?.status;

    if(responseCode){
        (responseCode===401 || responseCode===403) && logout();
    }
};
