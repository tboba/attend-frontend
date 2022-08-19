import {
    Avatar,
    Box,
    Image,
    Popover,
    PopoverArrow,
    PopoverContent,
    PopoverHeader,
    PopoverTrigger
} from "@chakra-ui/react";
import React from "react";
import MeetupEvent from "../../../../models/MeetupEvent";

const EventDetailImage: React.FC<{ meetupEvent: MeetupEvent }> = ({meetupEvent}) => {
    const authorNickname = meetupEvent.author.nickname || meetupEvent.author.login;
    const fallbackImage = meetupEvent.image || '../../../public/static/assets/nophoto.jpg';

    return <Box position='relative' padding='1em'>
        <Popover placement='right' closeOnBlur>
            <PopoverTrigger>
                <Avatar name='Test' src='https://avatars.githubusercontent.com/u/23281839?v=4' position='absolute'
                        top='0px' right='0px'/>
            </PopoverTrigger>
            <PopoverContent>
                <PopoverHeader
                    fontWeight='semibold'>Created by: {authorNickname}</PopoverHeader>
                <PopoverArrow/>
            </PopoverContent>
        </Popover>
        <Image src={fallbackImage} alt={meetupEvent.name} w='100%'/>
    </Box>
}

export default EventDetailImage;