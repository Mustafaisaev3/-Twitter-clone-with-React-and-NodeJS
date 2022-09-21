import {takeEvery, call, put} from '@redux-saga/core/effects'
import { TweetsApi } from '../../../services/api/tweetsApi'
import { setTweetData} from './action'
import { TweetActionsType } from './contracts/actionType'
import { setTweetDataLoadingState } from './action'
import { LoadingState } from './contracts/state'
import { FetchTweetDataActionInterface } from './contracts/actionType'
import { Tweet } from '../tweets/contracts/state'


export function* fetchTweetDataRequest ({payload: tweetId}: FetchTweetDataActionInterface) {
    try {
        const data: Tweet = yield call(TweetsApi.fetchTweetData, tweetId)
        yield put(setTweetData(data))
    } catch (error) {
        yield put(setTweetDataLoadingState(LoadingState.ERROR))
    }
}

export function* tweetSaga () {
    yield takeEvery(TweetActionsType.FETCH_TWEET_DATA, fetchTweetDataRequest)
}