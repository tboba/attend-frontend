import {Text} from "@chakra-ui/react";
import React from "react";

const EventDetailAddress: React.FC<{address: string}> = ({address}) => {
    return <Text as='address'
                 display='inline-block'
                 backgroundColor='blue'
                 color='white'
                 fontStyle='normal'
                 borderRadius='8px'
                 border='3px solid blue'
                 padding='0.25em 0.50em'
                 marginBottom='2px'>{address || 'No Address'}</Text>

}

export default EventDetailAddress;