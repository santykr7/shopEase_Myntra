import { configureStore } from "@reduxjs/toolkit"
import itemsSlice from "./itemsSlice"
import fetchStatusSlice from "./fetchStatus"

const myntraStore = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    fetchStatus: fetchStatusSlice.reducer,
  },
})

export default myntraStore
