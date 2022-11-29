import axios from "axios";

export const getAgenda = async (id) => {
    try {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/eventos/agenda/${id}`)
        return res
    } catch (error) {
        throw new Error(error.message);
    }
}

export const getEvent = async (id) => {
    try {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/eventos/${id}`)
        return res
    } catch (error) {
        throw new Error(error.message);
    }
}

export const createEvent = async (content) => {
    const data = {
        "super_id": content.SuperId,
        "titulo": content.title,
        "inicio": content.start,
        "fin": content.end,
        "descripción": content.description,
        "lugar": content.place
    }
    try {
        const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/eventos/`, data)
        return res
    } catch (error) {
        throw new Error(error.message);
    }
}

