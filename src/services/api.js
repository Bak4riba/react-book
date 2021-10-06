import axios from "axios";

const api = axios.create({
    baseURL:'https://bak4riba.herokuapp.com/api/v1/emails',
    //timeout:10000,
    headers:{'Content-Type': 'application/json'}
})


export async function getUsers(){
    const response = await api.get()
    return response.data
} 