import React from 'react'
import Navbar from "../components/Navbar";
import Head from "next/head";

interface MainLayoutProps {
    title?: string
    description?: string
    keywords?: string
}

const MainLayout: React.FC<MainLayoutProps> = ({
           children,
           title,
           description,
           keywords
       }) => {

    return (
        <>
            <Head>
                <title>{title || 'DevelopsToday - Blog'}</title>
                <meta name={'description'}
                      content={`DevelopsToday. Simple Blog with Next.js, React, Redux, TypeScript ${description}`}
                />
                <meta name={'robots'} content={'index, follow'}/>
                <meta name={'keywords'} content={keywords || 'DevelopsToday, React, Next.js'}/>
                <meta name={'viewport'} content={'width-device-width, initial-scale=1'}/>
            </Head>
            <Navbar/>
            {children}
        </>
    )
}

export default MainLayout