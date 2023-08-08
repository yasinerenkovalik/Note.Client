import axios from "axios"


export const fetchRegister= async(input)=>{
    const{data} = await axios.post("https://localhost:7260/UserContoller/add",input)
    return data;
}

export const fetchLogin=async (input)=>{
    const{data} = await axios.post(`https://localhost:7260/UserContoller/login?email=${input.email}&password=${input.password}`)
    
    return data;
}