import { POST_API_STARTED,POST_DATA_SUCCESS,POST_DATA_FAILURE, CLICKED_POST_API } from "../actions/actiontypes";
// import { clicked_post_api } from "../actions/postactions";
const initialState = {
    loading: false,
    data: [], 
    error: "",
     selectedpost:"null"
}

const postreducers = (state = initialState, action) => {
     switch(action.type) {
         case POST_API_STARTED: return {...state, loading: true};

         case POST_DATA_SUCCESS: return(
            {...state, data: action.payload, loading: false, error: ""});

        case POST_DATA_FAILURE: return(
                {...state, data: [], loading: false, error: action.payload});
          case CLICKED_POST_API:
            return {...state,selectedpost:action.payload,loading: false, error:""}
        default: return state;
     }
}

export default postreducers;