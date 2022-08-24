import {Box, Flex, Text} from "@chakra-ui/react";
import MainNavigation from "./MainNavigation";
import {useRouter} from "next/router";

const MainHeader = () => {
    const router = useRouter();

    const handleLogoClick = async () => {
        await router.push('/');
    }

    return <Box as='header' alignSelf='stretch'>
        <Flex w='100%' h='5rem' alignItems='center' justifyContent='space-between' padding='0 10%'>
            <Text fontFamily='Acme'
                  fontSize='2em'
                  cursor='pointer'
                  onClick={handleLogoClick}>Attend</Text>
            <MainNavigation/>
        </Flex>
    </Box>
}

export default MainHeader;