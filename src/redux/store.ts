import { practiceApi } from "@/services/practiceApi";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { accountApi } from "@/services/accountApi";

const persistConfig = {
	key: "data",
	storage,
};

const reducer = combineReducers({});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) => {
		const a = getDefaultMiddleware({
			serializableCheck: false,
			immutableCheck: false,
		});
		a.push();
		return a;
	},
	devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
