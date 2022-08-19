import EventDetail from "../components/events/items/detail/EventDetail";
import MeetupEvent from "../models/MeetupEvent";
import RegisteredUser from "../models/RegisteredUser";

const DUMMY_EVENT = {
        id: 'p1',
        name: 'Cool meeting in Warsaw!',
        description: 'This is the event Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequuntur cupiditate, dolore earum eveniet,' +
            '    exercitationem in itaque magni minima minus molestiae molestias natus nisi optio perspiciatis quas vel voluptas' +
            '    voluptatibus.!',
        image: 'https://annaeverywhere.com/wp-content/uploads/2021/10/where-to-stay-in-Warsaw.jpg',
        address: 'Warsaw',
        author: 'User 1',
        attendees: ['User 1', 'User 2'],
    }

const EventDetails = () => {
    const author = new RegisteredUser(DUMMY_EVENT.author);
    const event = new MeetupEvent(DUMMY_EVENT.id, author, DUMMY_EVENT.name);
    event.image = DUMMY_EVENT.image;
    event.address = DUMMY_EVENT.address;
    event.description = DUMMY_EVENT.description;

    return (
        <EventDetail meetupEvent={event}/>
    )
}

export default EventDetails;