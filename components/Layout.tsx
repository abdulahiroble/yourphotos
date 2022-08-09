import React from 'react'
import NextLink from "next/link"
import {TriangleUpIcon, Icon} from '@chakra-ui/icons'
// import {Logo} from "@/styles/icons"
// import {useAuth} from '@/lib/auth'
import {
    Flex,
    Stack,
    Link,
    Avatar,
    Button,
    Box,
} from '@chakra-ui/react'
import Footer from './Footer'
import Nav from './Nav'

const Layout = ({children}: any) => {

    // const auth = useAuth();

    return (
        <Box backgroundColor="gray.100">
            <Nav />
            <Flex margin="0 auto" direction="column" px={[0, 8, 8]}>
                {children}
            </Flex>
            <Footer />
        </Box>
    )
}

export default Layout