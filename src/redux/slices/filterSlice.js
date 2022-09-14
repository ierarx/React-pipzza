import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    categoryId: 0,
    sortProperty: {
        name: 'популярности',
        sort: 'rating',
    },
    searchStateValue: '',
    currentPage: 1,
}

export const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCategoryId(state, action) {
            state.categoryId = action.payload
        },
        setSortProperty(state, action) {
            state.sortProperty = action.payload
        },
        setSearchValue(state, action) {
            state.searchStateValue = action.payload
        },
        setCurrentPage(state, action) {
            state.currentPage = action.payload
        },
        setFilters(state, action) {
            state.categoryId = Number(action.payload.categoryId)
            state.currentPage = Number(action.payload.currentPage)
            state.searchStateValue = action.payload.searchStateValue
            state.sortProperty = action.payload.sortProperty
        },
    },
})

// Action creators are generated for each case reducer function
export const {
    setCategoryId,
    setSortProperty,
    setSearchValue,
    setFilters,
    setCurrentPage,
} = filterSlice.actions

export default filterSlice.reducer
