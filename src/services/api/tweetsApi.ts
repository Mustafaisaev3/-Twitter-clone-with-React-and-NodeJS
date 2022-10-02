import { axios } from '../../core/axios'
import { Tweet } from "../../store/ducks/tweets/contracts/state";

interface Responce<T> {
    status: string,
    data: T
}

export const TweetsApi = {
    async fetchTweets (): Promise<Tweet[]> {
        const { data } = await axios.get<Responce<Tweet[]>>('/tweets');
        return data.data;
    },  
    async fetchTweetData (id: string): Promise<Tweet> {
        const { data } = await axios.get<Responce<Tweet>>('/tweets/' + id);
        return data.data;
    },  
    async addTweet (payload:  {text: string, images: string[]}): Promise<Tweet> {
        const { data } = await axios.post<Responce<Tweet>>('/tweets', payload);
        return data.data;
    },  
    removeTweet: (id: string): Promise<any> => axios.delete('/tweets/' + id)
}