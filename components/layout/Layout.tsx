import React from "react";
import {Flex} from "@chakra-ui/react";

const Layout: React.FC<{children: React.ReactNode}> = ({children}) => {
    return <Flex
        h='100vh'
        minH='100vh'
        backgroundColor='#f2f4f7'
    >
        {children}
        <style global jsx>{`
              html, body, div#__next {
                height: 100vh;
                min-height: 100vh;
                background-color: #f2f4f7;
              }
            `}</style>
    </Flex>
}

export default Layout;