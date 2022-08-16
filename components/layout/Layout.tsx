import React from "react";
import {Flex} from "@chakra-ui/react";

const Layout: React.FC<{children: React.ReactNode}> = ({children}) => {
    return <Flex
        h='100vh'
        minH='100vh'
        backgroundColor='#f2f4f7'
    >
        {children}
    </Flex>
}

export default Layout;