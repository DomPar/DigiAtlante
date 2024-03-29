import api from "./config";

export const logIn = async (crendentials) => {
    const { data } = await api.post('/auth/login', crendentials)
    localStorage.setItem('token', data.result )
    localStorage('userId', data.userId)
}