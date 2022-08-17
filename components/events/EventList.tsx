import EventItem from "./EventItem";
import {Flex, useMediaQuery} from "@chakra-ui/react";
import {useContext} from "react";
import {SearchContext} from "../../store/search-store";
import NoEventsLabel from "../ui/NoEventsLabel";

const DUMMY_EVENTS = [
    {
        id: 'p1',
        name: 'Cool meeting in Warsaw!',
        description: 'This is the event Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequuntur cupiditate, dolore earum eveniet,' +
            '    exercitationem in itaque magni minima minus molestiae molestias natus nisi optio perspiciatis quas vel voluptas' +
            '    voluptatibus.!',
        image: 'https://annaeverywhere.com/wp-content/uploads/2021/10/where-to-stay-in-Warsaw.jpg',
        address: 'Warsaw',
        author: 'User 1',
        attendees: ['User 1', 'User 2'],
    },
    {
        id: 'p2',
        name: 'Another Meeting near the Palace of Culture and Science!',
        description: 'This is the event number two!',
        image: 'https://annaeverywhere.com/wp-content/uploads/2021/10/where-to-stay-in-Warsaw.jpg',
        address: 'Warsaw',
        author: 'User 2',
        attendees: ['User 2', 'User 3'],
    },
    {
        id: 'p3',
        name: 'Exciting Meeting in Jagiellonian University',
        description: 'This is the event Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequuntur cupiditate, dolore earum eveniet,' +
            '    exercitationem in itaque magni minima minus molestiae molestias natus nisi optio perspiciatis quas vel voluptas' +
            '    voluptatibus.!',
        image: 'https://promocja.fais.uj.edu.pl/documents/144868508/144944556/Wydzial_FAIS_UJ_1.jpg',
        address: 'Lojasiewicza 11, Krakow',
        author: 'User 2',
        attendees: ['User 2', 'User 3'],
    },
];

const EventList = () => {
    const [isMobile] = useMediaQuery('(max-width: 768px)');
    const searchCtx = useContext(SearchContext);

    const isMobileProps = !isMobile ? {w: '50%'} : {w: '90%'};
    const allEvents = DUMMY_EVENTS.filter(event => event.name.toLowerCase().startsWith(searchCtx.searchValue.toLowerCase()));
    const noneEventsProps = allEvents.length === 0 ? {w: '100vw'} : null;

    return (
        <Flex {...isMobileProps} flexDirection='column' {...noneEventsProps}>
            {allEvents.length === 0 && <NoEventsLabel />}
            {allEvents.length !== 0 &&
                allEvents.map(event => (
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