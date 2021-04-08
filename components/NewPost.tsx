import React from 'react';
import {Box, Button, Card, Grid, TextField} from "@material-ui/core";
import {useInput} from "../hooks/useInput";
import axios from "axios";
import {useRouter} from "next/router";

const NewPost = () => {
    const postTitle = useInput('')
    const postBody = useInput('')
    const router = useRouter()


    const addPost = () => {
        const data = {
            'title': postTitle.value,
            'body': postBody.value
        }
        axios.post('https://simple-blog-api.crew.red/posts', data)
            .then(resp => router.push('/'))
            .catch(e => console.log(`Error with newPost: ${e}`))
    }


    return (
        <Grid container justify={'center'}>
            <Card style={{maxWidth: 900, margin: 8}}>
                <Box p={6}>
                    <Grid container>
                        <h2 style={{marginTop: 20, color: "green"}}>Create your post</h2>
                        <Grid container>
                            <TextField
                                {...postTitle}
                                label={'Title'}
                                fullWidth
                            />
                            <TextField
                                {...postBody}
                                label={'Post body'}
                                fullWidth
                            />
                            <Button
                                variant={'outlined'}
                                style={{marginTop: 5}}
                                onClick={() => addPost()}
                            >
                                Send
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Card>
        </Grid>
    );
};

export default NewPost;