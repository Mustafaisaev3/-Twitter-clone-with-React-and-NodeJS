import { createSelector } from "reselect";
import { RootState } from "../../store";
import { LoadingState } from "../../types";
import {UsersState} from "./contracts/state";

export const selectUsers = (state: RootState): UsersState => state.users

export const selectUsersItems = (state: RootState): UsersState['items'] => state.users.items
