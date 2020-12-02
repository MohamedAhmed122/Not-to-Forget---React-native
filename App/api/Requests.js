import axios from "axios"

const URL ='http://practice.mobile.kreosoft.ru/api'
export const getCategories = async (api_token) =>{
    try {
        const config ={
            headers:{
                'Content-type':'application/json',
                Authorization : `Bearer ${api_token}`
            }
        }
        const { data } = await axios.get(`${URL}/categories`, config)
        // console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}

export const getPriority = async (api_token) =>{
    try {
        const config ={
            headers:{
                Authorization : `Bearer ${api_token}`
            }
        }
        const { data } = await axios.get(`${URL}/priorities`, config)
        // console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}