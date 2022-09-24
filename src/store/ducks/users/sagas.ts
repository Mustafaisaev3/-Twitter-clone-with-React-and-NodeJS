import {takeEvery, call, put} from '@redux-saga/core/effects'
import { TagsApi } from '../../../services/api/tagsApi'
import { LoadingState } from '../../types'
// import { setTags, setTagsLoadingState, TagsActionsType } from './action'



export function* fetchUsersRequest (): any {
    // try {
    //     const items = yield call(TagsApi.fetchTags)
    //     yield put(setTags(items))
    // } catch (error) {
    //     yield put(setTagsLoadingState(LoadingState.ERROR))
    // }
}

export function* usersSaga () {
    // yield takeEvery(TagsActionsType.FETCH_TAGS, fetchTagsRequest)
}