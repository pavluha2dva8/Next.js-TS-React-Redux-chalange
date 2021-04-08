import React from 'react';
import {Box, Grid} from "@material-ui/core";
import PostItem from "./PostItem";
import {IPosts} from "../types/posts";

interface PostListProps {
    posts: IPosts[]
}

const PostList: React.FC<PostListProps> = ({posts}) => {

    return (
        <Grid container justify="center">
            <Box color="white" bgcolor="palevioletred" p={4}>
                <h1>DevelopsToday Simple Blog</h1>

                {posts.map(item =>
                    <PostItem key={item.id} post={{id: item.id, title: item.title, body: item.body}}/>
                )}

            </Box>
        </Grid>
    )
};

export default PostList