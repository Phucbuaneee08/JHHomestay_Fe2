const authState = {
    email: "",
    role: "",
    token: "",
    userId:"",
    //expDate: "",
}

export const authReducer = (state = authState, action) => {
    switch(action.type){
        case "LOGIN":
            const {email, userId, token, role} = action.payload
            // add expire handle here

            localStorage.setItem("authData", JSON.stringify({
                    role: role,
                    email: email,
                    userId: userId,
                    token: token,
                })
            )
            return {
                ...authState,
                role,
                userId,
                token,
                email,
                
            }
        default:
            return state
    }

}