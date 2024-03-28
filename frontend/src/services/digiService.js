import api from "./config";

const getOneDigi = async (id) => {
    try {
        const {data} = await api.get(`/digimon/${id}`)
    return data;
    } catch (error) {
        console.log(error.response.data)
    }
}
const getAllDigi = async() => {
    try {
        const {data} = await api.get('/digimon/')
        return data
    } catch (error) {
        console.log(error)
    }
}
export {getOneDigi, getAllDigi}