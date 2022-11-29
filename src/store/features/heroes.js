import axios from "axios";

export const getHeroes = async () => {
    try {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/supers/heroes`)
        return res;
    } catch (error) {
        throw new Error(error.message);
    }

}

export const getHeroe = async (id) => {
    try {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/supers/heroe/${id}`)
        return res;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const getHeroeByName = async (name) => {
    try {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/supers/heroeByNombre/${name}`)
        return res;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const getHeroeBySkills = async (skills) => {
    try {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/supers/heroeByHabilidades/${skills}`)
        return res;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const getTeensHeroes = async (heroes) => {
    try {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/supers/teenHeroes/${heroes}`)
        return res;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const getOlderHeroes = async (heroes) => {
    try {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/supers/adultHeroes/${heroes}`)
        return res;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const getHeroesByCivilStatus = async (status) => {
    try {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/supers/heroeByRelacionesPersonales/${status}`)
        return res;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const getHeroesByBestSponsor = async (id) => {
    try {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/supers/heroeBestSponsor/${id}`)
        return res;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const getTop3Heroes = async () => {
    try {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/supers/top3Heroes`)
        return res;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const getMostFoughtVillanoByHeroe = async (id) => {
    try {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/supers/mostFoughtVillanoByHeroe/${id}`)
        return res;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const getSponsorsByHeroe = async () => {
    try {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/supers/patrocinadoresByHeroe`)
        return res;
    } catch (error) {
        throw new Error(error.message);
    }
}



