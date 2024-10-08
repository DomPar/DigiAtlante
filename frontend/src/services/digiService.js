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
const getAllDigi = async(searchTerm, selectAtt, selectLevel) => {
    try {
        const {data} = await api.get('/digimon/', {
            params: {
                search: searchTerm,
                attribute: selectAtt,
                level: selectLevel
            }
        });
        return data
    } catch (error) {
        console.log(error)
    }
}

const getAllDigiListedById = async() => {
    try {
        const {data} = await api.get('/digimon/id');
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}

const getAllDigiByLevel = async(digiLevel) => {
    try {
        const {data} = await api.get('/digimon/level', {
            params: {
                lvl: digiLevel
            }
        });
        return data
    } catch (error) {
        console.log(error)
    }
}

const getAllDigiByAttribute = async(digiAttribute) => {
    try {
        const {data} = await api.get('/digimon/attribute', {
            params: {
                att: digiAttribute
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

export {getOneDigi,
        getAllDigi,
        getAllPre, 
        getAllEvo, 
        getAllVar, 
        introduceDigi, 
        addPre, 
        addEvo, 
        addVar, 
        getAllDigiByLevel, 
        getAllDigiByAttribute,
        getAllDigiListedById
    }