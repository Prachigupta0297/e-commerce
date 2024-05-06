import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';


export const signUpUser = createAsyncThunk('signupuser', async (body) => {
    const res = await fetch("https://65aa303f081bd82e1d964ae6.mockapi.io/curd/crud", {
        method: "post",
        headers: {
            'Content-Type': "application/json",
        },
        body: JSON.stringify(body)
    })
    return await res.json();
})


export const loginUser = createAsyncThunk(
    'user/loginUser',
    async(userCredential)=>{
        try{
            const request = await axios.post('https://65aa303f081bd82e1d964ae6.mockapi.io/curd/crud', userCredential);
            const response = await request.data;
            localStorage.setItem('user',JSON.stringify(response));
            return response;
        }
        catch(error){
          console.log(error);
        }
           
    }
);

const authSlice = createSlice({
    name : 'user',
    initialState : {
        loading : false,
        users : null,
        signuser:null,
        error : null,
        searchData: [],
    },
    reducers: {
        logout : (state, action) =>{
          state.users = null;
        },
        
    },

    extraReducers:(builder)=>{
        builder
        .addCase(signUpUser.pending, (state, action) => {
            state.loading = true
        })
        .addCase(signUpUser.fulfilled, (state, action,) => {
            state.loading = false;
            // if (error) {
            //     state.error = error
            // } else {
            //     state.msg = msg
            // }

            state.signuser = action.payload;
        })
        .addCase(signUpUser.rejected, (state, action) => {
            state.loading = false; 
            state.error = "Error occurred";
        })

        .addCase(loginUser.pending,(state)=>{
            state.loading = true;
            state.users = null;
            state.error=null;
        })
        .addCase(loginUser.fulfilled,(state, action)=>{
            state.loading = false;
            state.users = action.payload;
            state.error= null
        })
        .addCase(loginUser.rejected,(state, action)=>{
            state.loading = false;
            state.users = null;
            console.log(action.error.message);
            if(action.error.message === 'Request failed with status code 401'){
                state.error.message = 'Access Denied! Invalid Credentials';
            }
            else{
                state.error = action.error.message;
            }
            
        })
        
       }
});

export const {logout} = authSlice.actions;

export default authSlice.reducer;