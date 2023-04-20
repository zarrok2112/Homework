import {createSlicer} from '@redux/toolkit';

export const authSlice = createSlicer({
    name: 'auth',
    initialState:{
        status:'cheking',
        uid:null,
        email:null,
        displayName:null,
        photoUrl:null,
        errorMessage:null
    }
    reducer:{
        register:(state, action) =>{
            state.mail = action.playload.email;
        },
        logout: (state,action) =>{

        }
        chekingCredentials:(state, action) =>{
            console.log('cheking')
        }
    }
})

export const {login, logout, chekingCredentials} = AuthSlice.actions;