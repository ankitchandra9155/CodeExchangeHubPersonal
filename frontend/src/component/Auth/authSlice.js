import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token:null,
    userId:null,
    userName: null,
    userEmail: null,
    isAuthenthicated: false,
    logIn: true,
    signUp: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isAuthenthicated = false;
            state.logIn = true;
            state.signUp = false;
        },
        signUp: (state, action) => {
            state.isAuthenthicated = false
            state.logIn = false;
            state.signUp = true;
        },
        signupSuccess: (state, action) => {
            state.isAuthenthicated = false
            state.logIn = true;
            state.signUp = false;
        },
        loginSuccess: (state, action) => {
            state.isAuthenthicated = true
            state.logIn = false;
            state.signUp = false;
            state.userName=action.payload.userName;
            state.userEmail=action.payload.userEmail;
            state.userId=action.payload.userId;
            state.token=action.payload.token;
        }
    }
})

export const { login, signUp, signupSuccess,loginSuccess } = authSlice.actions
export default authSlice.reducer