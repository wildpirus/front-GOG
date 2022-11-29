import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

const initialState = {
  heroes: [],
  topThree: [],
  teenHeroes: [],
  adultHeroes: [],
  details: [],
  agenda: [],
  mostFought: [],
  heroesResult: [],
  sponsor: [],
  skills: [],
  personalRelation: [],
  heroeCreated: [],
  bestSponsor: []
}



export const heroesSlice = createSlice({
  name: 'heroes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGetHeroes.fulfilled, (state, action) => {
        state.heroes = action.payload
    }) 
    builder.addCase(fetchTopThree.fulfilled, (state,action) => {
        state.topThree = action.payload
    })
    builder.addCase(fetchTeenHeroes.fulfilled, (state, action) => {
        state.teenHeroes = action.payload
    })
    builder.addCase(fetchAdultsHeroes.fulfilled, (state, action) => {
        state.adultHeroes = action.payload
    })
    builder.addCase(fetchEditDetails.fulfilled, (state, action) => {
        state.details = action.payload
    })
    builder.addCase(fetchAgenda.fulfilled, (state, action) => {
        state.agenda = action.payload
    })
    builder.addCase(fetchMostFoughtVillanoByHeroe.fulfilled, (state, action) => {
        state.mostFought = action.payload
    })
    builder.addCase(fetchHeroeByName.fulfilled, (state, action) => {
        state.heroesResult = action.payload
    })
    builder.addCase(createSponsorBySuper.fulfilled, (state, action) => {
        state.sponsor = action.payload
    })
    builder.addCase(GetheroeByHabilidades.fulfilled, (state, action) => {
        state.skills = action.payload
    })
    builder.addCase(getHeroeByRelacionesPersonales.fulfilled, (state, action) => {
        state.personalRelation = action.payload
    })
    builder.addCase(createHeroe.fulfilled, (state, action) => {
        state.heroeCreated = action.payload
    })

    builder.addCase(getBestSponsor.fulfilled, (state, action) => {
        state.bestSponsor = action.payload
    })
    
    
  }
})


// Actions
export const fetchGetHeroes = createAsyncThunk('heroes/fetchGetHeroes', async () => {
    const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/supers/heroes`);
    return res.data
})

export const fetchTopThree = createAsyncThunk('heroes/fetchTopThree', async () => {
    const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/supers/top3Heroes`);
    return res.data
})

export const fetchTeenHeroes = createAsyncThunk('heroes/fetchTeenHeroes', async () => {
    const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/supers/teenHeroes`);
    return res.data
})

export const fetchAdultsHeroes = createAsyncThunk('heroes/fetchAdultsHeroes', async () => {
    const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/supers/adultHeroes`);
    return res.data
})

export const fetchEditDetails = createAsyncThunk('heroes/fetchEditDetails', async (id) => {
    const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/supers/heroe/${id}`);
    return res.data
})

export const fetchAgenda = createAsyncThunk('heroes/fetchAgenda', async (id) => {
    const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/eventos/agenda/${id}`);
    return res.data
})

export const fetchMostFoughtVillanoByHeroe = createAsyncThunk('heroes/fetchMostFoughtVillanoByHeroe', async (id) => {
    const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/supers/mostFoughtVillanoByHeroe/${id}`);
    return res.data
})
export const fetchBestSponsor = createAsyncThunk('heroes/fetchBestSponsor', async (id) => {
    const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/supers/mostFoughtVillanoByHeroe/${id}`);
    return res.data
})

export const fetchHeroeByName = createAsyncThunk('heroes/fetchHeroeByName', async (name) => {
    const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/supers/heroeByNombre/${name}`);
    return res.data
})

export const createSponsorBySuper = createAsyncThunk('heroes/createSponsorBySuper', async (data) => {
    const res = await axios.get(`${import.meta.env.VITE_BASE_URL}createSponsorBySuper`, data);
    return res.data
})

export const GetheroeByHabilidades = createAsyncThunk('heroes/GetheroeByHabilidades', async (data) => {
    const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/supers/heroeByHabilidades/${data}`);
    return res.data
})

export const getHeroeByRelacionesPersonales = createAsyncThunk('heroes/getHeroeByRelacionesPersonales', async (data) => {
    const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/supers/heroeByRelacionesPersonales/${data}`);
    return res.data
})

export const createHeroe = createAsyncThunk('heroes/createHeroe', async (data) => {
    const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/Supers/`, data);
    
    return res.data
})

export const getBestSponsor = createAsyncThunk('heroes/getBestSponsor', async (id) => {
    const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/supers/heroeBestSponsor/${id}`);
    
    return res.data
})




// Selectors
export const selectHeroes = (state) => state.heroesSlice.heroes;
export const selectTopThree = (state) => state.heroesSlice.topThree;
export const selectTeenHeroes = (state) => state.heroesSlice.teenHeroes;
export const selectAdultHeroes = (state) => state.heroesSlice.adultHeroes;
export const selectDetails = (state) => state.heroesSlice.details;
export const selectAgenda = (state) => state.heroesSlice.agenda;
export const selectMostFought = (state) => state.heroesSlice.mostFought;
export const selectHeroesResult = (state) => state.heroesSlice.heroesResult;
export const selectSponsor = (state) => state.heroesSlice.sponsor;
export const selectSkills = (state) => state.heroesSlice.skills;
export const selectPersonalRelation = (state) => state.heroesSlice.personalRelation;
export const selectHeroeCreated = (state) => state.heroesSlice.heroeCreated;
export const selectBestSponsor = (state) => state.heroesSlice.bestSponsor;

export default heroesSlice.reducer