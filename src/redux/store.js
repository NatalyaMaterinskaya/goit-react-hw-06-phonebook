import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import * as rp from 'redux-persist';
import { rootReducer } from './reducer';

const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: 'filter',
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          rp.FLUSH,
          rp.REHYDRATE,
          rp.PAUSE,
          rp.PERSIST,
          rp.PURGE,
          rp.REGISTER,
        ],
      },
    }),
});

export const persistor = persistStore(store);
