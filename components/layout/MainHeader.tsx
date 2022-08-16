import {Flex, Text} from "@chakra-ui/react";
import MainNavigation from "./MainNavigation";

const MainHeader = () => {
    return <header>
        <Flex justifyContent='space-between'>
            <Text fontFamily='Acme' fontSize='2em'>Attend</Text>
            <MainNavigation />
        </Flex>
    </header>
}

export default MainHeader;