import { RootState } from './../index';

export const isAuthSelector = (state: RootState) => state.auth.isAuth;
export const auth = (state: RootState) => state.auth;
export const guest = (state: RootState) => state.info.guests;
export const events = (state: RootState) => state.info.events;
