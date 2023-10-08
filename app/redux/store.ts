import { configStore } from '@reduxjs/toolkit';

export const store = configStore({
	reducer: {},
	devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;