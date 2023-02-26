import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/slice';
import storage from 'redux-persist/lib/storage';
import { statusReducer } from './status/slice';
import { authReducer } from './auth/slice';
// import { combineReducers } from 'redux';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'isLoggedIn'],
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

// const rootReducer = combineReducers({
//   auth: authReducer,
//   phonebook: contactsReducer,
//   status: statusReducer,
// });

// export const store = configureStore({
//   reducer: persistReducer(persistConfig, rootReducer),
//     middleware,
//     devTools: process.env.NODE_ENV === 'development',
//   });

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authReducer),
    phonebook: contactsReducer,
    status: statusReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);