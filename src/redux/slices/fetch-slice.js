import { createAsyncThunk, createSlice, } from "@reduxjs/toolkit"
import axios from "axios"



export const asyncAction = createAsyncThunk(
  'fetching/asyncActionStatus',
  async (params) => {
    const {
      sortBy,
      order,
      category,
      search,
    } = params
    const { data } = await axios
      .get(
        `https://63eb60affb6b6b7cf7dd1913.mockapi.io/pizzas?${category}&sortBy=${sortBy}&order=${order}${search}`,
      )
    return data
  }

)

const initialState = {
  items: []
}
export const fetchSlice = createSlice({
  name: 'fetching',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload
    },
  },
  extraReducers: {
    [asyncAction.fulfilled]: (state, action) => {
      state.items = action.payload
    },
  }

})

export const { setItems } = fetchSlice.actions

export default fetchSlice.reducer