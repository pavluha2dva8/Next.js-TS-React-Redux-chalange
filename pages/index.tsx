import React from 'react'
import MainLayout from "../layouts/MainLayout";
import {useRouter} from "next/router";
import PostList from "../components/PostList";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {NextThunkDispatch, wrapper} from "../store";
import {fetchPosts} from "../api/api";

const Index = () => {
    const router = useRouter()
    const {posts} = useTypedSelector(state => state.posts)


    return (
        <>
            <MainLayout>
                <PostList posts={posts}/>
            </MainLayout>
        </>
    )
}

export default Index

export const getServerSideProps = wrapper.getServerSideProps(async ({store}) => {
    const dispatch = store.dispatch as NextThunkDispatch
    await dispatch(await fetchPosts())
})
