import {IComment, IPosts, IPostWithComments, PostActionTypes, PostsActions} from "../../types/posts";


export const getPosts = (payload: IPosts[]): PostsActions => {
    return {type: PostActionTypes.GET_ALL_POSTS, payload}
}
export const deletePost = (): PostsActions => {
    return {type: PostActionTypes.DELETE_POST}
}
export const createPost = (payload: IPostWithComments): PostsActions => {
    return {type: PostActionTypes.CREATE_POST, payload}
}
export const retrivePost = (payload: IPostWithComments): PostsActions => {
    return {type: PostActionTypes.RETRIEVE_POST, payload}
}
export const updatePost = (payload: IPostWithComments): PostsActions => {
    return {type: PostActionTypes.UPDATE_POST, payload}
}
export const addComment = (payload: IComment): PostsActions => {
    return {type: PostActionTypes.ADD_COMMENT, payload}
}
