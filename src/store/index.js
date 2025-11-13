import { configureStore } from '@reduxjs/toolkit'
import sidebarSlice from '../features/toggle/sidebarSlice.js'
import userSlice from '../features/user/userSlice.js'
const store =  configureStore({
  reducer: {
    userABC: userSlice,
    sidebar: sidebarSlice,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware(
    {serializableCheck: false}
  ),
})

export default store