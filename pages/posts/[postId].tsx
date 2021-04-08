import React, {useState} from 'react';
import {useRouter} from "next/router";
import MainLayout from "../../layouts/MainLayout";
import {Box, Button, Grid} from "@material-ui/core";
import PostWithComments from "../../components/PostWithComments";
import {GetServerSideProps} from "next";
import axios from "axios";

const PostPage = ({serverPost}) => {
    const [post, setPost] = useState(serverPost)
    const router = useRouter()
    console.log(post)

    return (
        <MainLayout
            title={`DevelopsToday - ${post.title}`}
            keywords={`JS, CSS, HTML, Next, React, ${post.title}`}
            >
            <Grid container justify={'center'}>
                <Box color="white" bgcolor="palevioletred" p={4}>
                    <Button
                        variant={'outlined'}
                        onClick={() => router.push('/')}
                    >
                        Back to list
                    </Button>
                    <PostWithComments post={post}/>
                </Box>
            </Grid>
        </MainLayout>
    );
};

export default PostPage;

export const getServerSideProps: GetServerSideProps = async ({params}) => {

    const response = await axios.get(`https://simple-blog-api.crew.red/posts/${params.postId}?_embed=comments`)

    return {
        props: {
            serverPost: response.data
        }
    }
}