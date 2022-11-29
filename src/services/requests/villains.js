import axios from "axios";

export const getVillains = async () => {
    try {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/supers/villanos`)
        return res
    } catch (error) {
        throw new Error(error.message);
    }
}

export const getVillainById = async (id) => {
    try {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/supers/villano/${id}`)
        return res
    } catch (error) {
        throw new Error(error.message);
    }
}

export const getVillainByName = async (name) => {
    try {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/supers/villano/${name}`)
        return res
    } catch (error) {
        throw new Error(error.message);
    }
}

export const getVillainByOrigin = async (origin) => {
    try {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/supers/villanoByOrigen/${origin}`)
        return res
    } catch (error) {
        throw new Error(error.message);
    }
}

export const getVillainByWeaknesses = async (weaknesses) => {
    try {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/supers/villanoByDebilidades/${weaknesses}`)
        return res
    } catch (error) {
        throw new Error(error.message);
    }
}

export const getWorstYoungVillain = async () => {
    try {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/supers/worstVillainAgainstTeen`)
        return res
    } catch (error) {
        throw new Error(error.message);
    }
}

export const getWorstVillainWithYoungHero = async (id) => {
    try {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/supers/WorstVillainAgainstTeenHero/${id}`)
        return res
    } catch (error) {
        throw new Error(error.message);
    }
}
