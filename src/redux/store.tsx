import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import authReducer from './authSlice'
import { staffSlice } from './StaffPageReducer/authSlice'
import { apiSlice } from '../features/apiSlice'
import { setupListeners } from '@reduxjs/toolkit/query'

const persistAuthConfig = {
  key: 'auth',
  storage,
}

const persistedAuthReducer = persistReducer(persistAuthConfig, authReducer)

const persistStaffConfig = {
  key: 'staff',
  storage,
}

const persistedStaffReducer = persistReducer(
  persistStaffConfig,
  staffSlice.reducer
)

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: persistedAuthReducer,
    staff: persistedStaffReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
export { store }
export const persistor = persistStore(store)
setupListeners(store.dispatch)
