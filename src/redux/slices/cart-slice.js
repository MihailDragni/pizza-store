import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  items: []
}


const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id)
      if (findItem) {
        findItem.count++
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = state.items.reduce((acc, obj) => {
        return (obj.price * obj.count) + acc
      }, 0)
    },
    decrementItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload)
      if (findItem.count > 0) {
        findItem.count--
      }
    },
    removeItem(state, action) {
      state.items = state.items.filter(obj => obj.id !== action.payload)
    },
    clearCart(state) {
      state.items = []
      state.totalPrice = 0
    },
  }

})


export const cartSelector = (state) => state.cart
export const { addItem, removeItem, clearCart, decrementItem } = cartSlice.actions

export default cartSlice.reducer