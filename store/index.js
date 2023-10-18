import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authSlice from './authSlice';
import registerSlice from './registerSlice';
import citySlice from './citySlice';
import categoriesSlice from './categoriesSlice';
import productsSlice from './productsSlice';
import countrySlice from './countrySlice';
import participantSlice from './participantSlice';
import favoriteSlice from './favoriteSlice';
import industrySlice from './industrySlice';

const persistConfig = {
    key: 'lucky',
    storage,
};

const rootReducer = combineReducers({
    [registerSlice.name]: registerSlice.reducer,
    [authSlice.name]: authSlice.reducer,
    [citySlice.name]: citySlice.reducer,
    [countrySlice.name]: countrySlice.reducer,
    [categoriesSlice.name]: categoriesSlice.reducer,
    [productsSlice.name]: productsSlice.reducer,
    [participantSlice.name]: participantSlice.reducer,
    [favoriteSlice.name]: favoriteSlice.reducer,
    [industrySlice.name]: industrySlice.reducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

const persistor = persistStore(store);

export { store, persistor };
