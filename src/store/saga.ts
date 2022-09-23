import {all} from '@redux-saga/core/effects'
import { tweetsSaga } from "./ducks/tweets/sagas"
import { tagsSaga } from './ducks/tags/sagas'
import { tweetSaga } from './ducks/tweet/sagas'
import { userSaga } from './ducks/user/sagas'

export function* rootSaga () {
    yield all([tweetsSaga(), tagsSaga(), tweetSaga(), userSaga()])
}