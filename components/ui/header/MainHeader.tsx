import {Box, Flex, Text} from "@chakra-ui/react";
import MainNavigation from "./MainNavigation";

const MainHeader = () => {
    return <Box as='header' alignSelf='stretch'>
        <Flex w='100%' h='5rem' alignItems='center' justifyContent='space-between' padding='0 10%'>
            <Text fontFamily='Acme' fontSize='2em'>Attend</Text>
            <MainNavigation />
        </Flex>
    </Box>
}

export default MainHeader;