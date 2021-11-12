const authState = {
    isAuthenticated: false,
    token: "",
    userId:"",
    //expDate: "",
}

export const authReducer = (state = authState, action) => {
    switch(action.type){
        case "LOGIN":
            const {userId, token} = action.payload
            // add expire handle here

            localStorage.setItem("userAuth", JSON.stringify({
                    userId: userId,
                    token: token,
                })
            )
            return {
                ...authState,
                userId,
                token,
                isAuthenticated: true,
            }
        default:
            return state
    }

}