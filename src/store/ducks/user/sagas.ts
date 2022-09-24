import {takeEvery, call, put} from '@redux-saga/core/effects'
import { AuthApi, AuthResponceApi} from '../../../services/api/authApi'
import { LoadingState } from '../../types'
import { setUserData, setUserDataLoadingState } from './action'
import { FetchSignInActionInterface, FetchSignUpActionInterface, SetUserDateActionInterface, UserActionsType } from './contracts/actionType'
import { User } from './contracts/state'


export function* fetchSignInRequest ({ payload }: FetchSignInActionInterface ){
    try {
        const {data} = yield call(AuthApi.signIn, payload)
        yield window.localStorage.setItem('token', data.token)
        yield put(setUserData(data))
    } catch (error) {
        yield put(setUserDataLoadingState(LoadingState.ERROR))
    }
}

export function* fetchSignUpRequest ({ payload }: FetchSignUpActionInterface ){
    try {
        console.log('register saga')
        yield put(setUserDataLoadingState(LoadingState.LOADING))
        yield call(AuthApi.signUp, payload)
        yield put(setUserDataLoadingState(LoadingState.SUCCESS))
    } catch (error) {
        yield put(setUserDataLoadingState(LoadingState.ERROR))
    }
}


export function* userSaga () {
    yield takeEvery(UserActionsType.FETCH_SIGN_IN, fetchSignInRequest)
    yield takeEvery(UserActionsType.FETCH_SIGN_UP, fetchSignUpRequest)
}