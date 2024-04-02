import api from "./config";

const introduceDigi = async (body) => {
    try {
        const {data} = await api.post('/digimon', body)
        return data
    } catch (error) {
        console.log(error.response.data)
    }
}

const getOneDigi = async (id) => {
    try {
        const {data} = await api.get(`/digimon/${id}`)
    return data;
    } catch (error) {
        console.log(error.response.data)
    }
}
const getAllDigi = async(searchTerm) => {
    try {
        const {data} = await api.get('/digimon/', {
            params: {
                search: searchTerm
            }
        });
        return data
    } catch (error) {
        console.log(error)
    }
}

const getAllPre = async(id) => {
    try {
        const {data} = await api.get(`/digimon/pre/${id}`)
        return data
    } catch (error) {
        console.log(error)
    }
}
const getAllEvo= async(id) => {
    try {
        const {data} = await api.get(`/digimon/evo/${id}`)
        return data
    } catch (error) {
        console.log(error)
    }
}
const getAllVar = async(id) => {
    try {
        const {data} = await api.get(`/digimon/var/${id}`)
        return data
    } catch (error) {
        console.log(error)
    }
}

const addPre = async (body) => {
    try {
        const {data} = await api.post('/digimon/pre', body)
        return data
    } catch (error) {
        console.log(error.response.data)
    }
}

const addEvo = async (body) => {
    try {
        const {data} = await api.post('/digimon/evo', body)
        return data
    } catch (error) {
        console.log(error.response.data)
    }
}

const addVar = async (body) => {
    try {
        const {data} = await api.post('/digimon/var', body)
        return data
    } catch (error) {
        console.log(error.response.data)
    }
}

export {getOneDigi, getAllDigi, getAllPre, getAllEvo, getAllVar, introduceDigi, addPre, addEvo, addVar}