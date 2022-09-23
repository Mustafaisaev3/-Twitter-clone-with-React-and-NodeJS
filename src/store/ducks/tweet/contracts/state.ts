import { LoadingState } from "../../../types";
import { Tweet } from "../../tweets/contracts/state";

export interface TweetState {
    data?: Tweet,
    loadingState: LoadingState
}