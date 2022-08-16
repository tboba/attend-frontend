import {Flex, Heading, Text} from "@chakra-ui/react";
import React from "react";

const EventItemContent: React.FC<{name: string, address: string, description: string}> = ({name, address, description}) => {
    return (
        <Flex flex={4} flexDirection='column'>
            <Flex justifyContent='space-between' marginTop='0.5em'>
                <Heading fontSize='1.5em' fontFamily='Montserrat' fontWeight='600'>{name}</Heading>
                <Text fontStyle='italic' fontFamily='Montserrat' fontWeight='300' marginRight='1em'>{address}</Text>
            </Flex>
            <Flex alignSelf='flex-start' margin='auto 20% auto 0'>
                <Text fontFamily='Montserrat' fontWeight='400' noOfLines={2}>{description}</Text>
            </Flex>
        </Flex>
    );
}

export default EventItemContent;