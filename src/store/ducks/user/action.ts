import { Action } from "redux";
import { LoginFormProps } from "../../../components/signin/SingUpModal";
import { LoadingState } from "../../types";
import { SetUserDateActionInterface, SetUserLoadingStateActionInterface, FetchSignInActionInterface, UserActionsType } from "./contracts/actionType";
import { UserState } from "./contracts/state";


export const setUserData = (payload: UserState['data']): SetUserDateActionInterface => ({
    type: UserActionsType.SET_USER_DATA,
    payload,
})

export const fetchSignIn = (payload: LoginFormProps): FetchSignInActionInterface => ({
    type: UserActionsType.FETCH_SIGN_IN,
    payload,
})

export const setUserDataLoadingState = (payload: LoadingState): SetUserLoadingStateActionInterface => ({
    type: UserActionsType.SET_LOADING_STATE,
    payload,
})



export type UserActions = 
    | SetUserDateActionInterface 
    | SetUserLoadingStateActionInterface
    // | FetchTweetsActionInterface 
    // | SetTweetsLoadingStateActionInterface 
    // | AddTweetActionInterface 
    // | FetchAddTweetActionInterface
    // | SetAddFormStateActionInterface