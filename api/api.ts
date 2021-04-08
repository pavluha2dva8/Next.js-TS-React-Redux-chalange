import axios from "axios";
import {Dispatch} from "react";
import {PostActionTypes, PostsActions} from "../types/posts";

export const fetchPosts = () => {
    return async (dispatch: Dispatch<PostsActions>) => {
        try {
            const response = await axios.get('https://simple-blog-api.crew.red/posts')
            dispatch({type: PostActionTypes.GET_ALL_POSTS, payload: response.data})

        } catch (e) {
            console.log(`Error: ${e}`)
        }
    }
}