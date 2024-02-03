import { createSlice } from "@reduxjs/toolkit"
const bagSlice = createSlice({
  name: "bag",
  initialState: [],
  reducers: {
    addItemsToBag: (state, action) => {
      state.push(action.payload)
    },
    removeItemsFromBag: (state, action) => {
      return state.filter((itemsID) => itemsID !== action.payload)
    },
  },
})

export const bagSliceAction = bagSlice.actions
export default bagSlice
