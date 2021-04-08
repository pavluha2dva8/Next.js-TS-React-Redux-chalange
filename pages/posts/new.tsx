import React from 'react';
import MainLayout from "../../layouts/MainLayout";
import {Box, Button, Grid} from "@material-ui/core";
import NewPost from "../../components/NewPost";
import {useRouter} from "next/router";

const New = () => {
    const router = useRouter()

    return (
        <MainLayout title={`DevelopsToday - New Post`}>
            <Grid container justify={'center'}>
                <Box color="white" bgcolor="palevioletred" p={4}>
                    <Button
                        variant={'outlined'}
                        onClick={() => router.push('/')}
                    >
                        Back to list
                    </Button>
                    <NewPost />
                </Box>
            </Grid>
        </MainLayout>
    );
};

export default New;