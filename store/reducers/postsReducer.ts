import {PostActionTypes, PostsActions, PostsState} from "../../types/posts";

const initialState2: PostsState = {
    posts: []
}


export const postsReducer = (state = initialState2, action: PostsActions): PostsState => {
    switch (action.type) {
        case PostActionTypes.GET_ALL_POSTS:
            return {
                ...state,
                posts: [...state.posts, ...action.payload]
            }

        default:
            return state
    }
}