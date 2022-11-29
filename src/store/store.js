import { configureStore } from '@reduxjs/toolkit'
import heroesSlice from "./features/heroesSlice"
import villiansSlice from './features/villiansSlice'

export const store = configureStore({
  reducer: {heroesSlice, villiansSlice},
})