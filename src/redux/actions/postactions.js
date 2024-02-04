import {POST_API_STARTED,POST_DATA_SUCCESS,POST_DATA_FAILURE,CLICKED_POST_API} from './actiontypes';
import axios from 'axios';

export const postApiStarted = () => {
    return {
        type: POST_API_STARTED
    }
}

export const postDataSuccess = (data) => {
    return {
        type: POST_DATA_SUCCESS,
        payload: data
    }
}

export const postDataFailure = (error) => {
    return {
        type: POST_DATA_FAILURE,
        payload: error
    }
}

export const clicked_post_api =(post)=>{
    return{
type:"CLICKED_POST_API",
payload:post
    }
}

export function postRequest(){
        return (dispatch)=>{ 
            dispatch(postApiStarted());
            axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response => dispatch(postDataSuccess(response.data)))
            .catch(err => dispatch(postDataFailure(err.message)))
        }
}