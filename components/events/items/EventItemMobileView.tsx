import React, {Fragment} from "react";
import {Box, Divider, Heading, Image, Text} from "@chakra-ui/react";

const EventItemMobileView: React.FC<{name: string, image: string, address: string, handleItemClick: () => {}}>
    = ({name, image, address, handleItemClick}) => {
    return <Fragment>
        <Divider orientation='horizontal' w='60%' m='2em auto'/>
        <Box borderRadius='6px' box-shadow='0 2px 8px rgba(0, 0, 0, 0.2)' cursor='pointer' onClick={handleItemClick}>
            <Box w='100%' h='20rem' overflow='hidden' borderRadius='6px 6px 0 0'>
                <Image src={image} alt={name} w='100%' minH='18.5rem' fit='cover'/>
            </Box>
            <Box textAlign='center' paddingTop='1rem'>
                <Heading fontSize='1.25rem'>{name}</Heading>
                <Text>{address}</Text>
            </Box>
        </Box>
    </Fragment>
}

export default EventItemMobileView;