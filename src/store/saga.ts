import {all} from '@redux-saga/core/effects'
import { tweetsSaga } from "./ducks/tweets/sagas"
import { tagsSaga } from './tags/sagas'

export function* rootSaga () {
    yield all([tweetsSaga(), tagsSaga()])
}