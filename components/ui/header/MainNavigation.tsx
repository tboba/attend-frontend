import {Flex, Box, Button} from "@chakra-ui/react";
import {NavLink} from "../../layout/NavLink";
import Link from "next/link";

const MainNavigation = () => {
    return <nav>
        <Flex m={0} p={0} alignItems='baseline'>
            <Box marginLeft='3rem'>
                <NavLink href='/'>Home</NavLink>
            </Box>
            <Box marginLeft='3rem'>
                <NavLink href='login'>Login</NavLink>
            </Box>
            <Box marginLeft='2rem'>
                <Link href='register'>
                    <Button colorScheme='teal' variant='outline'>
                        Register
                    </Button>
                </Link>
        </Box>
    </Flex>
</nav>
}

export default MainNavigation;