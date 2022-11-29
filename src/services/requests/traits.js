import axios from "axios";

export const getTraitsHabities = async () => {
    try {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/rasgos/habilidades`)
        return res
    } catch (error) {
        throw new Error(error.message);
    }
}

export const getTraitsWeaknesses = async () => {
    try {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/rasgos/debilidades`);
        return res;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const getTraitsById = async (id) => {
    try {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/rasgos/${id}`);
        return res;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const createTrait = async (content) => {
    const data = {
        "titulo": content.title,
        "tipo_rasgo": content.trait
    }
    try {
        const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/rasgos`, data);
        return res;
    } catch (error) {
        
    }

}