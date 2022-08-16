import React from "react";
import {Flex} from "@chakra-ui/react";

const CenteredSubLayout: React.FC<{ children: React.ReactNode }> = ({children}) => {
    return <Flex flexDirection='column' alignItems='center'>
        {children}
    </Flex>
}

export default CenteredSubLayout;