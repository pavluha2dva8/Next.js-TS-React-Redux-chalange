import React, {useState} from 'react';
import {IPostWithComments} from "../types/posts";
import {Box, Button, Card, Grid, TextField} from "@material-ui/core";
import CommentItem from "./CommentItem";
import {useInput} from "../hooks/useInput";
import axios from "axios";
import {useRouter} from "next/router";

interface PostItemProps {
    post: IPostWithComments
}

const PostWithComments: React.FC<PostItemProps> = ({post}) => {
    const [posts, setPosts] = useState<IPostWithComments>(post)
    const postComment = useInput('')
    const {query} = useRouter()
    const postId = query.postId

    const addComment = async () => {
        try {
            const response = await axios.post('https://simple-blog-api.crew.red/comments', {
                postId: Number(postId),
                body: postComment.value
            })
            setPosts({...posts, comments: [...posts.comments, response.data]})
        } catch (e) {
            console.log(e)
        }
    }


    return (
        <Grid container justify={'center'}>
            <Card style={{maxWidth: 900, margin: 8}}>
                <Box p={6}>
                    <Grid container>
                        <Grid container direction={"column"}>
                            {/*<h1>Post #{post.id}</h1>*/}
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                        </Grid>
                        <h2 style={{marginTop: 20, color: "green"}}>Comments</h2>
                        <Grid container>
                            <TextField
                                label={'What\'s on your mind?'}
                                fullWidth
                                {...postComment}
                            />
                            <Button onClick={addComment} variant={'outlined'}
                                    style={{marginTop: 5}}>Send</Button>
                        </Grid>
                        <Grid container direction={"column"}>
                            <CommentItem post={posts}/>
                        </Grid>
                    </Grid>
                </Box>
            </Card>
        </Grid>
    );
};

export default PostWithComments;