import { configureStore } from '@reduxjs/toolkit'
// import the slice reducer (default export) — not the slice object
import counterReducer from './reduxFeatures/counterSlice'

export const store = configureStore({
  reducer: {
    CounterStore: counterReducer,
  },
})