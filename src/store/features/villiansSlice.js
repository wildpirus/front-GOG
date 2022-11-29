import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

const initialState = {
  villians: [],
  villiansByName: [],
  origin: [],
  weakness: [],
  worstVillian: []
}



export const villiansSlice = createSlice({
  name: 'heroes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGetVillians.fulfilled, (state, action) => {
        state.villians = action.payload
    }) 
    builder.addCase(fetchVilliansByName.fulfilled, (state, action) => {
      state.villiansByName = action.payload
  }) 
  builder.addCase(fetchVilliansByOrigin.fulfilled, (state, action) => {
    state.origin = action.payload
}) 
builder.addCase(fetchVilliansByWeakness.fulfilled, (state, action) => {
  state.weakness = action.payload
}) 
builder.addCase(fetchWorstVillainAgainstTeen.fulfilled, (state, action) => {
  state.worstVillian = action.payload
}) 

  }
})

// Actions
export const fetchGetVillians = createAsyncThunk('villians/fetchGetVillians', async () => {
    const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/supers/villanos`);
    return res.data
})

export const fetchVilliansByName = createAsyncThunk('villians/fetchVilliansByName', async (name) => {
  const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/supers/villanoByNombre/${name}`);
  return res.data
})


export const fetchVilliansByOrigin = createAsyncThunk('villians/fetchVilliansByOrigin', async (origin) => {
  const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/supers/villanoByOrigen/${origin}`);
  return res.data
})

export const fetchVilliansByWeakness = createAsyncThunk('villians/fetchVilliansByWeakness', async (weakness) => {
  const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/supers/villanoByDebilidades/${weakness}`);
  return res.data
})

export const fetchWorstVillainAgainstTeen = createAsyncThunk('villians/fetchWorstVillainAgainstTeen', async () => {
  const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/supers/worstVillainAgainstTeen`);
  return res.data
})



// Selectors
export const selectVillians = (state) => state.villiansSlice.villians;
export const selectVilliansByName = (state) => state.villiansSlice.villiansByName;
export const selectVilliansByOrigin = (state) => state.villiansSlice.origin;
export const selectVilliansByWeakness = (state) => state.villiansSlice.weakness;
export const selectWorstVillainAgainstTeen = (state) => state.villiansSlice.worstVillian;




export default villiansSlice.reducer