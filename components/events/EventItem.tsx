import React from "react";
import {Image, Flex, Divider} from "@chakra-ui/react";
import EventItemContent from "./EventItemContent";

const EventItem: React.FC<{ name: string, description: string, image: string, address: string }>
    = ({name, description, image, address}) => {
    return (
        <Flex m='1rem 0' maxH='8rem' borderWidth='1px' borderRadius='1em' overflow='hidden'>
            <Flex flex={1}>
                <Image src={image} alt={name}/>
            </Flex>
            <Divider orientation='vertical' h='80%' m='auto 1em'/>
            <EventItemContent name={name} address={address} description={description}/>
        </Flex>
    );
}

export default EventItem;