import React from "react";
import {Box, Flex, Image, Divider, useMediaQuery} from "@chakra-ui/react";
import EventItemContent from "./EventItemContent";
import EventItemMobileView from "../../EventItemMobileView";

const EventItem: React.FC<{ name: string, description: string, image: string, address: string }>
    = ({name, description, image, address}) => {
    const [isMobile] = useMediaQuery('(max-width: 768px)');

    return (
        <Box>{!isMobile ?
            <Flex m='1rem 0' maxH='8rem' borderWidth='1px' borderRadius='1em' overflow='hidden'>
                <Flex flex={1}>
                    <Image src={image} alt={name} fit='contain'/>
                </Flex>
                <Divider orientation='vertical' h='80%' m='auto 1em'/>
                <EventItemContent name={name} address={address} description={description}/>
            </Flex>
            : <EventItemMobileView name={name} image={image} address={address}/>}</Box>
    );
}
export default EventItem;