import React from 'react';
import {IPostWithComments} from "../types/posts";
import {Box} from "@material-ui/core";

interface PostItemProps {
    post: IPostWithComments
}

const CommentItem: React.FC<PostItemProps> = ({post}) => {
    return (
        <>
            {post.comments.map(item =>
                <Box p={2}>
                    <h4 style={{color: "green"}}>Author #{item.id}</h4>
                    <p>{item.body}</p>
                </Box>
            )}
        </>
    );
};

export default CommentItem;