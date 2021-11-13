const authState = {
    role: "",
    isAuthenticated: false,
    token: "",
    userId:"",
    //expDate: "",
}

export const authReducer = (state = authState, action) => {
    switch(action.type){
        case "LOGIN":
            const {userId, token, role} = action.payload
            // add expire handle here

            localStorage.setItem("authData", JSON.stringify({
                    userId: userId,
                    token: token,
                })
            )
            return {
                ...authState,
                role,
                userId,
                token,
                isAuthenticated: true,
                
            }
        default:
            return state
    }

}