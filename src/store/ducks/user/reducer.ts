import produce, {Draft} from "immer"
import { LoadingState } from "../../types"
import { UserState } from "./contracts/state"
import { UserActionsType } from "./contracts/actionType"
import { UserActions } from "./action"

const initialUserState: UserState = {
    data: undefined,
    status: LoadingState.NEVER,
}

export const userReducer = produce((draft: Draft<UserState>, action: UserActions) => {

    switch(action.type) {
        case UserActionsType.SET_USER_DATA:
            draft.data = action.payload
            draft.status = LoadingState.SUCCESS
            break
        case UserActionsType.SET_LOADING_STATE:
            draft.status = action.payload
            break
        default:
            break

    }

}, initialUserState)