import produce, {Draft} from "immer"
import { LoadingState } from "../../types"
import { UsersActions, UsersActionsType } from "./action"
import { UsersState } from "./contracts/state"

const initialUsersState: UsersState = {
    items: [],
    loadingState: LoadingState.NEVER
}

export const usersReducer = produce((draft: Draft<UsersState>, action: UsersActions) => {

    switch(action.type) {
        case UsersActionsType.SET_ITEMS:
            draft.items = action.payload
            draft.loadingState = LoadingState.LOADED
            break
        case UsersActionsType.FETCH_ITEMS:
            draft.loadingState = LoadingState.LOADING
            break
        default:
            break

    }

}, initialUsersState)


