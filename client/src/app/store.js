import { configureStore} from '@reduxjs/toolkit'
import flightsSlice from '../features/flights/flightsSlice'

export const store = configureStore({
  reducer: {
    flightsState: flightsSlice
  }
})