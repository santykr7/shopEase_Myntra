import { createSlice } from "@reduxjs/toolkit"
import { DEFAULT_ITEMS_LIST } from "../data/itemsList"

const itemsSlice = createSlice({
  name: "items",
  initialState: DEFAULT_ITEMS_LIST,
  reducers: {
    addInitialItems: (store, action) => {
      console.log("reducer", store, action)
      return action.payload
    },
  },
})

export const itemsActions = itemsSlice.actions

export default itemsSlice
