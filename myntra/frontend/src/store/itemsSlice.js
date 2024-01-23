import { createSlice } from "@reduxjs/toolkit"
import { DEFAULT_ITEMS_LIST } from "../data/itemsList"

const itemsSlice = createSlice({
  name: "items",
  initialState: DEFAULT_ITEMS_LIST,
  reducers: {
    addInitialItems: (store, action) => {
      return store
    },
  },
})

export const itemsAction = itemsSlice.action

export default itemsSlice
