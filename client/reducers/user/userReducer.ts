import {UserAction, UserActionType, UserState} from "./types";

const initialState: UserState = {
    user: null
};

export const userReducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionType.LOGIN:
            return { user: {...action.payload} }
        case UserActionType.CHECK_AUTH:
            return { user: action.payload ? {...action.payload} : null }
        default:
            return state
    }
}