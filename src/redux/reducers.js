const authState = {
    email: "",
    role: "",
    token: "",
    userId:"",
    //expDate: "",
}

const homestayState = []

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
        
        case "LOGOUT":
            localStorage.removeItem("authData")
            return {
                ...authState,
                role: "",
                userId: "",
                token: "",
                email: "", 
            }
        default:
            return state
    }
}

export const homestayReducer = (state = homestayState, action) => {
    switch (action.type) {
        case "SET":
            const { homestays } = action.payload
            //console.log(homestays)
            return homestays

        case "RESET":
            return homestayState

        default:
            return state
    }
}