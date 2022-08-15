import React from "react";
import {Image, Text, Flex, Divider} from "@chakra-ui/react";

const EventItem: React.FC<{ name: string, description: string, image: string, address: string }>
    = ({name, description, image, address}) => {
    return (
        <Flex m='1rem 0' maxH='8rem' borderWidth='1px' borderRadius='1em' overflow='hidden'>
            <Flex flex={1}>
                <Image src={image} alt={name}/>
            </Flex>
            <Divider orientation='vertical' h='80%' m='auto 1em'/>
            <Flex flex={4} flexDirection='column'>
                <Flex justifyContent='space-between' marginTop='0.5em'>
                    <Text>{name}</Text>
                    <Text fontStyle='italic' marginRight='1em'>{address}</Text>
                </Flex>
                <Flex alignSelf='flex-start' margin='auto 20% auto 0'>
                    <Text noOfLines={2}>{description}</Text>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default EventItem;