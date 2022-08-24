import {Flex, Box, Button} from "@chakra-ui/react";
import {NavLink} from "../../layout/NavLink";
import Link from "next/link";
import {signOut, useSession} from "next-auth/react";
import {Fragment} from "react";

const MainNavigation = () => {
    const {data: session} = useSession();

    const userNotSignedIn = <Fragment>
        <Box marginLeft='3rem'>
            <NavLink href='/api/auth/signin'>Login</NavLink>
        </Box>
        <Box marginLeft='2rem'>
            <Link href='/api/auth/signin'>
                <Button colorScheme='teal' variant='outline'>
                    Register
                </Button>
            </Link>
        </Box>
    </Fragment>

    const userSignedIn = <Fragment>
        <Box marginLeft='3rem'>
            <NavLink href='/new-event'>Add an Event</NavLink>
        </Box>
        <Box marginLeft='2rem'>
            <Button colorScheme='teal' variant='outline' onClick={() => signOut()}>
                Logout
            </Button>
        </Box>
    </Fragment>

    return <Box as='nav'>
        <Flex m={0} p={0} alignItems='baseline'>
            <Box marginLeft='3rem'>
                <NavLink href='/' exact>Home</NavLink>
            </Box>
            {!session && userNotSignedIn}
            {session && userSignedIn}
        </Flex>
    </Box>
}

export default MainNavigation;