import axios from "axios"

//api in own file for reusability

export const getCmsPage = (uri) => {
    return axios.get(`/api/cmspage/${uri?uri:'index'}`);
}

export const submitNewsletterSignUp = (data)=>{
    return axios.post(`/api/newslettersignup`, data);
}