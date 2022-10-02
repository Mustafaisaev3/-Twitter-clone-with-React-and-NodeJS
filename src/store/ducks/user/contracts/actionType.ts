import { Action } from "redux";
import { RegisterFormProps } from "../../../../components/signin/SignInModal";
import { LoginFormProps } from "../../../../components/signin/SingUpModal";
import { LoadingState } from "../../../types";
import { User } from "./state";

export enum UserActionsType {
    SET_USER_DATA = 'user/SET_USER_DATA',
    FETCH_SIGN_IN = 'user/FETCH_SIGN_IN',
    FETCH_SIGN_UP = 'user/FETCH_SIGN_UP',
    FETCH_USER_DATA = 'user/FETCH_USER_DATA',
    SET_LOADING_STATE = 'user/SET_LOADING_STATE',

}

export interface FetchSignInActionInterface extends Action<UserActionsType>{
    type: UserActionsType.FETCH_SIGN_IN,
    payload: LoginFormProps
}

export interface FetchSignUpActionInterface extends Action<UserActionsType>{
    type: UserActionsType.FETCH_SIGN_UP,
    payload: RegisterFormProps
}


export interface FetchUserDataActionInterface extends Action<UserActionsType>{
    type: UserActionsType.FETCH_USER_DATA
}

export interface SetUserDateActionInterface extends Action<UserActionsType>{
    type: UserActionsType.SET_USER_DATA,
    payload: User | undefined
}

export interface SetUserLoadingStateActionInterface extends Action<UserActionsType>{
    type: UserActionsType.SET_LOADING_STATE,
    payload: LoadingState
}
