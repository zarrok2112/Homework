import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import {auth} from "../firebase/config";

export const registerAuth = (email, password, displayName) => {
    return async (dispatch) => {
        const response = createUserWithEmailAndPassword(auth, email, password)
        if(response){

            await updadateProfile(auth.currentUser, {
                displayName: 'jonathan',
                photoURL: ''
            })
            
            const {email} = response.user
            dispatch( updateProfile( {email} ) )
        }else{
            throw new Error('login failed')
        }
            
    }
}
