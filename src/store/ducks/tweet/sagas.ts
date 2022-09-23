import {takeEvery, call, put} from '@redux-saga/core/effects'
import { TweetsApi } from '../../../services/api/tweetsApi'
import { setTweetData} from './action'
import { TweetActionsType } from './contracts/actionType'
import { setTweetDataLoadingState } from './action'
import { FetchTweetDataActionInterface } from './contracts/actionType'
import { Tweet } from '../tweets/contracts/state'
import { LoadingState } from '../../types'



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