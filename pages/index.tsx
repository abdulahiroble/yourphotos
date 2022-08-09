import {Box, ChakraProvider} from '@chakra-ui/react'
import type {NextPage} from 'next'
import Cards from '../components/Cards'
import Layout from '../components/Layout'
import Photos from '../components/Photos'

const Home: NextPage = () => {
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

export default Home
