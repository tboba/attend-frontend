import AddEvent from '../components/events/AddEvent';
import { useSession } from 'next-auth/react';
import NotLoggedIn from '../components/layout/NotLoggedIn';

const NewEvent = () => {
  const { data: session } = useSession();

  if (session) {
    return <AddEvent />;
  }

  return <NotLoggedIn />;
};

export default NewEvent;
