import {takeEvery, call, put} from '@redux-saga/core/effects'
import { TweetsApi } from '../../../services/api/tweetsApi'
import { AddTweet, FetchAddTweetActionInterface, setAddFormState, setTweets, setTweetsLoadingState, TweetsActionsType } from './action'
import { AddFormState, LoadingState } from './contracts/state'


export function* fetchTweetsRequest (): any {
    try {
        const items = yield call(TweetsApi.fetchTweets)
        yield put(setTweets(items))
    } catch (error) {
        yield put(setTweetsLoadingState(LoadingState.ERROR))
    }
}

export function* addTweetRequest ({payload}: FetchAddTweetActionInterface): any {
    try {
        const data = {
            _id: Math.random().toString(36).substring(2),
            text: payload,
            user: {
                fullname: "Test User",
                username: "test",
                avatarUrl: "https://source.unsplash.com/random/100x100?5"
            }
        }
        const item = yield call(TweetsApi.addTweet, data)
        yield put(AddTweet(item))
    } catch (error) {
        yield put(setAddFormState(AddFormState.ERROR))
    }
}

export function* tweetsSaga () {
    yield takeEvery(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest)
    yield takeEvery(TweetsActionsType.FETCH_ADD_TWEET, addTweetRequest)
}