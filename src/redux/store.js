import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './slices/cart-slice'
import filterSlice from './slices/filter-slice'
import fetchSlice from './slices/fetch-slice'

export const store = configureStore({
  reducer: { filter: filterSlice, cart: cartSlice, fetching: fetchSlice },
})

