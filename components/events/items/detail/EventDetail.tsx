import {Box, Heading, Text} from "@chakra-ui/react";
import React from "react";
import MeetupEvent from "../../../../models/MeetupEvent";
import EventDetailImage from "./EventDetailImage";
import EventDetailAddress from "./EventDetailAddress";

const EventDetail: React.FC<{ meetupEvent: MeetupEvent }> = ({meetupEvent}) => {
    return <Box textAlign='center' w={{base: '75%', md: '50%'}}>
        <Heading display='inline-block' margin='1em 0' paddingBottom='0.50rem'
                 borderBottom='4px dashed black'>{meetupEvent.name}</Heading>
        <EventDetailImage meetupEvent={meetupEvent}/>
        <EventDetailAddress address={meetupEvent.address!}/>
        <Text>{meetupEvent.description || '<i>No event description.</i>'}</Text>
    </Box>
}

export default EventDetail;