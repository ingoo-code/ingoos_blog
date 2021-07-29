const initialState = {
    IsLogin:false,
}

const USER_LOGIN = "USER_LOGIN"
const USER_LOGOUT = "USER_LOGOUT"

export const UserLoginAction = () => {
    return {
        type:USER_LOGIN
    }
}

export const UserLogoutAction = () => {
    return {
        type:USER_LOGOUT
    }
}

const reducer = (state=initialState,action) => {
    switch(action.type){
        case USER_LOGIN:
            return {
                ...state,
                IsLogin:true   
            }
        case USER_LOGOUT:
            return {
                ...state,
                IsLogin:false,
            }
        default:
            return state
    }
}

export default reducer