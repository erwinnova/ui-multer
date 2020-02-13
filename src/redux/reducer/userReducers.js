const INITIAL_STATE = {
    id: 0,
    username: null,
    email: '',
    address: '',
    token: '',
    verified: false
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'LOGIN':
            return{
                id: action.payload.id,  
                username: action.payload.username,
                email: action.payload.email,
                address: action.payload.address,
                token: action.payload.token,
                verified: action.payload.verified
            }
        case "LOGOUT":
            return INITIAL_STATE
        default: 
            return INITIAL_STATE    
    }   
}