import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params:{
        api_key:"765cde2944c4841ca7f8667037dbc3a2",
        language:"pt-BR"
    } 
});




export default api;