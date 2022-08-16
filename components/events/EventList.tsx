import EventItem from "./EventItem";
import {Box, Flex, useMediaQuery} from "@chakra-ui/react";

const DUMMY_EVENTS = [
    {
        id: 'p1',
        name: 'Event 1',
        description: 'This is the event Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequuntur cupiditate, dolore earum eveniet,' +
            '    exercitationem in itaque magni minima minus molestiae molestias natus nisi optio perspiciatis quas vel voluptas' +
            '    voluptatibus.!',
        image: 'https://annaeverywhere.com/wp-content/uploads/2021/10/where-to-stay-in-Warsaw.jpg',
        address: 'Warsaw 1',
        author: 'User 1',
        attendees: ['User 1', 'User 2'],
    },
    {
        id: 'p2',
        name: 'Event 2',
        description: 'This is the event number two!',
        image: 'https://annaeverywhere.com/wp-content/uploads/2021/10/where-to-stay-in-Warsaw.jpg',
        address: 'Warsaw 2',
        author: 'User 2',
        attendees: ['User 2', 'User 3'],
    },
    {
        id: 'p3',
        name: 'Event 3',
        description: 'This is the event Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequuntur cupiditate, dolore earum eveniet,' +
            '    exercitationem in itaque magni minima minus molestiae molestias natus nisi optio perspiciatis quas vel voluptas' +
            '    voluptatibus.!',
        image: 'https://promocja.fais.uj.edu.pl/documents/144868508/144944556/Wydzial_FAIS_UJ_1.jpg',
        address: 'Warsaw 2',
        author: 'User 2',
        attendees: ['User 2', 'User 3'],
    },
];

const EventList = () => {
    const [isMobile] = useMediaQuery('(max-width: 768px)');

    const isMobileProps = !isMobile ? {w: '50%'} : {w: '90%', margin: 'auto'};

    return (
        <Flex {...isMobileProps} flexDirection='column'>
          {DUMMY_EVENTS.map(event => (
              <EventItem key={event.id}
                         name={event.name}
                         description={event.description}
                         image={event.image}
                         address={event.address}
              />
          ))
          }
      </Flex>
    );
}

export default EventList;