import React from 'react';
import {IPosts} from "../types/posts";
import {Box, Button, Card, Grid, IconButton} from "@material-ui/core";
import {useRouter} from "next/router";
import {Delete} from "@material-ui/icons";
import axios from "axios";

interface PostItemProps {
    post: IPosts
}

const PostItem: React.FC<PostItemProps> = ({post}) => {
    const router = useRouter()

    const deletePost = (postId) => {
        axios.delete(`https://simple-blog-api.crew.red/posts/${postId}`)
            .then(resp => router.push('/'))
            .catch(e => console.log(`Error with newPost: ${e}`))
    }


    return (
        <Card style={{maxWidth: 900, margin: 8}}>
            <Box p={2}>
                <Grid container direction={"column"} justify="space-between">
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>

                    <Grid container justify="flex-end">
                        <Button
                            variant={'outlined'}
                            onClick={() => router.push(`/posts/${post.id}`)}
                        >
                            Show this post
                        </Button>

                        <IconButton onClick={() => deletePost(post.id)}>
                            <Delete/>
                        </IconButton>
                    </Grid>

                </Grid>
            </Box>
        </Card>
    );
};

export default PostItem