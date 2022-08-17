import React, {Fragment} from "react";
import {Flex} from "@chakra-ui/react";
import MainHeader from "../ui/header/MainHeader";

const Layout: React.FC<{ children: React.ReactNode }> = ({children}) => {
    return <Fragment>
        <Flex
            h='100vh'
            minH='100vh'
            backgroundColor='#f2f4f7'
        >
            {children}
        </Flex>
        <style global jsx>{`
          html, body, div#__next {
            height: 100vh;
            min-height: 100vh;
            background-color: #f2f4f7;
          }
        `}</style>
    </Fragment>
}

export default Layout;