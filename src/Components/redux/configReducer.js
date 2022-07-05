import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {GET_DATA, GET_DATA_SUCCESS} from "./configAction"

const initialState = {};
  
  export const reducer = persistReducer(
  { storage, key: "config"},
    (state = initialState, {type, payload}) => {
          switch (type) {
              case GET_DATA:
                  return{
                      ...state,
                      isLoading: true,
                  };
                  case GET_DATA_SUCCESS:
                      return {...payload,}
              default:
                  return state
          }
      })
  