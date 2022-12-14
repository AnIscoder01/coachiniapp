import { CURRENT, FAIL, GET_USERSLIST, LOGIN, LOGOUT, REGISTER} from "../types/authTypes";
const initialState = {
    auth:false,
    user:null,
    loading:true,
}

const authReducer =(state = initialState, { type, payload }) => {
    switch (type) {
        case REGISTER:
        case LOGIN:
            localStorage.setItem('token',payload.token)
            return{
                ...state,auth:true,user:payload.user,loading:false
            }    
        case CURRENT: return{
            ...state,auth:true,loading:false,user:payload
        }     
        case FAIL:
        case LOGOUT:
                localStorage.removeItem("token")
              return{
                    ...state,auth:false,user:null,loading:false
                }  
        case GET_USERSLIST:
            return{
                ...state,auth:true,loading:false,users:payload
            }   
            
        default:
            return state
    }
  
}
export default authReducer