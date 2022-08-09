import {ReactElement} from 'react';
import {Box, SimpleGrid, Icon, Text, Stack, Flex} from '@chakra-ui/react';
import Gallery from 'react-photo-gallery-next';


const photos = [
    {
        src: "https://images.unsplash.com/photo-1659983732450-022a449ccd31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
        width: 1,
        height: 1
    },
    {
        src: "https://images.unsplash.com/photo-1659976417053-7243d2e325a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        width: 5,
        height: 4
    },
    {
        src: "https://images.unsplash.com/photo-1660052540160-ea130535137b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        width: 4,
        height: 4
    },
    {
        src: "https://images.unsplash.com/photo-1660054908224-ad1ebfea2559?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        width: 4,
        height: 3
    },
    {
        src: "https://images.unsplash.com/photo-1657138754158-bc6864d12557?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        width: 4,
        height: 3
    },
    {
        src: "https://images.unsplash.com/photo-1660056078905-839a10724ca2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
        width: 4,
        height: 3
    },
    {
        src: "https://images.unsplash.com/photo-1659861276871-9979a31a55ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        width: 4,
        height: 3
    }
];

export default function Photos() {
    return (
        <Box p={4}>
            <Text fontSize='4xl'>Image Album</Text>
            <Gallery photos={photos} />
        </Box>
    );
}