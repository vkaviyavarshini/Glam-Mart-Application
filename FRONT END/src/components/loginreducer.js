import { combineReducers } from "redux";
import {SET_EMAIL} from './actions';

const initialState = {
    email: '',
    pass: '',
    name:'',
    checkpass: false,
  };
  
  const LoginReducer = (state = {email:""},action)=>{
    switch(action.type){
      case SET_EMAIL:
        return {...state,email:action.payload};
      default:
        return state;
    }
  };

  export const rootReducer = combineReducers({
    login: LoginReducer
  });

  const loginReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_EMAIL':
        return {
          ...state,
          email: action.payload,
        };
        case 'SET_NAME':
        return {
          ...state,
          name: action.payload,
        };
      case 'SET_PASS':
        return {
          ...state,
          pass: action.payload,
        };
      case 'SET_CHECKPASS':
        return {
          ...state,
          checkpass: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default loginReducer;