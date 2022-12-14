import { Action } from "redux";
import { LoadingState } from "../../types";
import { AddFormState, Tweet, TweetsState } from "./contracts/state";

export enum TweetsActionsType {
    SET_TWEETS = 'tweets/SET_TWEETS',
    FETCH_TWEETS = 'tweets/FETCH_TWEETS',
    SET_LOADING_STATE = 'tweets/SET_LOADING_STATE',
    FETCH_ADD_TWEET = 'tweets/FETCH_ADD_TWEET',
    ADD_TWEET = 'tweets/ADD_TWEET',
    REMOVE_TWEET = 'tweets/REMOVE_TWEET',
    SET_ADD_FORM_STATE = 'tweets/SET_ADD_FORM_STATE',
}



export interface SetTweetsActionInterface extends Action<TweetsActionsType>{
    type: TweetsActionsType.SET_TWEETS,
    payload: TweetsState['items']
}

export interface FetchAddTweetActionInterface extends Action<TweetsActionsType>{
    type: TweetsActionsType.FETCH_ADD_TWEET,
    payload: {
        text: string,
        images: string[]
    }
}

export interface AddTweetActionInterface extends Action<TweetsActionsType>{
    type: TweetsActionsType.ADD_TWEET,
    payload: Tweet
}

export interface RemoveTweetActionInterface extends Action<TweetsActionsType>{
    type: TweetsActionsType.REMOVE_TWEET,
    payload: string
}

export interface FetchTweetsActionInterface extends Action<TweetsActionsType>{
    type: TweetsActionsType.FETCH_TWEETS,
}

export interface SetTweetsLoadingStateActionInterface extends Action<TweetsActionsType>{
    type: TweetsActionsType.SET_LOADING_STATE,
    payload: LoadingState
}

export interface SetAddFormStateActionInterface extends Action<TweetsActionsType>{
    type: TweetsActionsType.SET_ADD_FORM_STATE,
    payload: AddFormState
}



export const setTweets = (payload: TweetsState['items']): SetTweetsActionInterface => ({
    type: TweetsActionsType.SET_TWEETS,
    payload,
})

export const FetchAddTweet = (payload: {text: string, images: string[]}): FetchAddTweetActionInterface => ({
    type: TweetsActionsType.FETCH_ADD_TWEET,
    payload,
})

export const AddTweet = (payload: Tweet): AddTweetActionInterface => ({
    type: TweetsActionsType.ADD_TWEET,
    payload,
})

export const RemoveTweet = (payload: string): RemoveTweetActionInterface => ({
    type: TweetsActionsType.REMOVE_TWEET,
    payload,
})

export const setTweetsLoadingState = (payload: LoadingState): SetTweetsLoadingStateActionInterface => ({
    type: TweetsActionsType.SET_LOADING_STATE,
    payload,
})


export const fetchTweets = (): FetchTweetsActionInterface => ({
    type: TweetsActionsType.FETCH_TWEETS,
})

export const setAddFormState = (payload: AddFormState): SetAddFormStateActionInterface => ({
    type: TweetsActionsType.SET_ADD_FORM_STATE,
    payload,
})


export type TweetsActions = 
    | SetTweetsActionInterface 
    | FetchTweetsActionInterface 
    | SetTweetsLoadingStateActionInterface 
    | AddTweetActionInterface 
    | RemoveTweetActionInterface 
    | FetchAddTweetActionInterface
    | SetAddFormStateActionInterface