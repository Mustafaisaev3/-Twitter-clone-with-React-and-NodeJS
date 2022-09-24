import { createStore, compose, applyMiddleware } from "redux"
import { rootReducer } from "./rootReducer"
import createSagaMiddleware from '@redux-saga/core'

import { rootSaga } from "./saga"
import { TweetsState } from "./ducks/tweets/contracts/state"
import { TagsState } from "./ducks/tags/contracts/state"
import { UserState } from "./ducks/user/contracts/state"
import { UsersState } from "./ducks/users/contracts/state"

const sagaMiddleware = createSagaMiddleware()

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
    }
}

const composeEnhancer = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

export interface RootState {
    tweets: TweetsState,
    tags: TagsState,
    tweet: TweetsState,
    user: UserState,
    users: UsersState
}

export const store = createStore(rootReducer, composeEnhancer(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)