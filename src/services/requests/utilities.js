import axios from "axios";

export const createSponsor = async (content) => {
    const data = {
        "super_id": content.superId,
        "nombre": content.name,
        "monto": content.value,
        "origen_monto": content.origin
    }
    try {
        const req = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/patrocinadores`, data);
        return req;
        
    } catch (error) {
        
    }
}

export const createFight = async (content) => {
    const data = {
        "titulo": content.title,
        "fecha": content.date,
    }
    try {
        const req = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/enfrentamientos`, data);
        return req;
        
    } catch (error) {
        
    }
}

export const createFeaturesSuper = async (content) => {
    const data = {
        "rasgos_id": content.traits,
        "super_id": content.superId,
    }
    try {
        const req = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/rasgossupers`, data);
        return req;
        
    } catch (error) {
        
    }
}
