import React from 'react'
import {Box, ChakraProvider} from '@chakra-ui/react'
import type {NextPage} from 'next'
import Cards from '../../components/Cards'
import Layout from '../../components/Layout'
import Photos from '../../components/Photos'

const profile = ({profile}) => {
    return (
        <>
            <Layout>
                <ChakraProvider resetCSS>
                    <Box bg="gray.100" >
                        <Cards />
                        <Photos />
                    </Box>
                </ChakraProvider>
            </Layout>
        </>
    )
}

export default profile

export async function getStaticPaths() {
    // When this is true (in preview environments) don't
    // prerender any static pages
    // (faster builds, but slower initial page load)
    if (process.env.SKIP_BUILD_STATIC_GENERATION) {
        return {
            paths: [],
            fallback: 'blocking',
        }
    }

    // Call an external API endpoint to get profile
    const res = await fetch('https://jsonplaceholder.typicode.com/users/');
    const profile = await res.json()

    // Get the paths we want to prerender based on profile
    // In production environments, prerender all pages
    // (slower builds, but faster initial page load)
    const paths = profile.map((users: {id: any}) => ({
        params: {id: users.id.toString()}
    }))

    // { fallback: false } means other routes should 404
    return {paths, fallback: false}
}


// Call an external API endpoint to get profile
export async function getStaticProps({params}) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const profile = await res.json();

    return {
        props: {
            profile
        }
    }
}