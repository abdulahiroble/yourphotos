import React from 'react'
import {Box, ChakraProvider} from '@chakra-ui/react'
import type {NextPage} from 'next'
import Cards from '../../components/Cards'
import Layout from '../../components/Layout'
import Photos from '../../components/Photos'

const profile = ({profile, profilePhotos}: any) => {
    console.log(profile);
    console.log(profilePhotos);
    return (
        <>
            <Layout>
                <ChakraProvider resetCSS>
                    <Box bg="gray.100" >
                        <Cards profile={profile} profilePhotos={profilePhotos} />
                        <Photos />
                    </Box>
                </ChakraProvider>
            </Layout>
        </>
    )
}

export default profile

export async function getStaticPaths() {

    if (process.env.SKIP_BUILD_STATIC_GENERATION) {
        return {
            paths: [],
            fallback: 'blocking',
        }
    }

    // Call an external API endpoint to get profile
    const res = await fetch('https://jsonplaceholder.typicode.com/users/');
    const profile = await res.json()

    const paths = profile.map((photos: {id: any}) => ({
        params: {id: photos.id.toString()}
    }))

    return {
        paths, fallback: 'blocking'
    }
}


export async function getStaticProps({params}: any) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const profile = await res.json();

    const photos = await fetch(`https://api.unsplash.com/photos/?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`);
    const profilePhotos = await photos.json();


    return {
        props: {
            profile,
            profilePhotos
        }
    }
}