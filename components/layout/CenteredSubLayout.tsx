import React from "react";
import {Flex} from "@chakra-ui/react";

const CenteredSubLayout: React.FC<{ children: React.ReactNode }> = ({children}) => {
    return <Flex flexDirection='column' alignItems='center' alignContent='center' w='100%' minW='100%'>
        {children}
    </Flex>
}

export default CenteredSubLayout;