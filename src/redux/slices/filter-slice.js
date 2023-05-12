import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  searchValue: '',
  categoryId: 0,
  sort: {
    name: 'популярности',
    sortProperty: 'rating'
  }
}

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload
    },
    setSortType(state, action) {
      state.sort = action.payload
    },
    setFilters(state, action) {
      state.sort = action.payload.sort
      state.categoryId = Number(action.payload.categoryId)
    }
  }
})
export const sortSelector = (state) => state.filter.sort

export const { setCategoryId, setSortType, setFilters, setSearchValue } = filterSlice.actions


export default filterSlice.reducer