import {takeEvery, call, put} from '@redux-saga/core/effects'
import { TagsApi } from '../../../services/api/tagsApi'
import { LoadingState } from '../../types'
import { setTags, setTagsLoadingState, TagsActionsType } from './action'



export function* fetchTagsRequest (): any {
    try {
        const items = yield call(TagsApi.fetchTags)
        yield put(setTags(items))
    } catch (error) {
        yield put(setTagsLoadingState(LoadingState.ERROR))
    }
}

export function* tagsSaga () {
    yield takeEvery(TagsActionsType.FETCH_TAGS, fetchTagsRequest)
}