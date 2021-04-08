
export interface PostsState {
    posts: IPosts[]
}

export interface IComment {
    postId: number
    body: string
    id: number
}

export interface IPosts {
    id: number
    title: string
    body: string
}

export interface IPostWithComments {
    id: number | null
    title: string | null
    body: string | null
    comments: {
        id: number | null
        postId: number | null
        body: string | null
    }[]
}

export enum PostActionTypes {
    GET_ALL_POSTS = 'GET_ALL_POSTS',
    DELETE_POST = 'DELETE_POST',
    CREATE_POST = 'CREATE_POST',
    RETRIEVE_POST = 'RETRIEVE_POST',
    UPDATE_POST = 'UPDATE_POST',
    ADD_COMMENT = 'ADD_COMMENT'
}

interface GetAllPostsAction {
    type: PostActionTypes.GET_ALL_POSTS
    payload: IPosts[]
}

interface DeletePostAction {
    type: PostActionTypes.DELETE_POST
}

interface CreatePostAction {
    type: PostActionTypes.CREATE_POST
    payload: IPosts
}

interface RetrievePostAction {
    type: PostActionTypes.RETRIEVE_POST
    payload: IPostWithComments
}

interface UpdatePostAction {
    type: PostActionTypes.UPDATE_POST
    payload: IPosts
}

interface AddCommentAction {
    type: PostActionTypes.ADD_COMMENT
    payload: IComment
}

export type PostsActions =
    GetAllPostsAction
    | DeletePostAction
    | CreatePostAction
    | RetrievePostAction
    | UpdatePostAction
    | AddCommentAction
