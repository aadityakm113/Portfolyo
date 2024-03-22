import axios from 'axios';

export const getData =async()=>{
    const endpoint="https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
    try {
        const result= await axios.get(endpoint)
        console.log(result.data)
        return result.data
    } catch (error) {
        console.log("error at get request",error)
        return error
    }
}
