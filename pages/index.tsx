import type { NextPage } from 'next';
import EventList from '../components/events/items/EventList';
import SearchTab from '../components/ui/SearchTab';
import React from 'react';
import SearchContextProvider from '../store/search-store';
import CenteredSubLayout from '../components/layout/CenteredSubLayout';

const App: NextPage = () => {
  return (
    <CenteredSubLayout>
      <SearchContextProvider>
        <SearchTab />
        <EventList />
      </SearchContextProvider>
    </CenteredSubLayout>
  );
};

export default App;
