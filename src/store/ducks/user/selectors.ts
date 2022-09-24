import { createSelector } from "reselect";
import { RootState } from "../../store";
import { LoadingState } from "../../types";
import { UserState } from "./contracts/state";

export const selectUserState = (state: RootState): UserState => state.user 

export const selectUserData = (state: RootState): UserState['data'] => selectUserState(state).data

export const selectIsAuth = (state: RootState): boolean => selectUserState(state).data !== undefined

export const selectUserStatus = (state: RootState): UserState['status'] => selectUserState(state).status

export const selectUserIsLoading = (state: RootState): boolean => selectUserState(state).status === LoadingState.LOADING


