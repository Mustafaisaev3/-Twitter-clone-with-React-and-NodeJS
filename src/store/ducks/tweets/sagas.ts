import {takeEvery, call, put} from '@redux-saga/core/effects'
import { TweetsApi } from '../../../services/api/tweetsApi'
import { LoadingState } from '../../types'
import { AddTweet, FetchAddTweetActionInterface, setAddFormState, setTweets, setTweetsLoadingState, TweetsActionsType } from './action'
import { AddFormState } from './contracts/state'


export function* fetchTweetsRequest (): any {
    try {
        const items = yield call(TweetsApi.fetchTweets)
        yield put(setTweets(items))
    } catch (error) {
        yield put(setTweetsLoadingState(LoadingState.ERROR))
    }
}

export function* addTweetRequest ({payload: text}: FetchAddTweetActionInterface): any {
    try {
        const item = yield call(TweetsApi.addTweet, text)
        yield put(AddTweet(item))
    } catch (error) {
        yield put(setAddFormState(AddFormState.ERROR))
    }
}

export function* tweetsSaga () {
    yield takeEvery(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest)
    yield takeEvery(TweetsActionsType.FETCH_ADD_TWEET, addTweetRequest)
}