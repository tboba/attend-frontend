import type {NextPage} from 'next'
import EventList from "../components/events/EventList";
import {Divider} from "@chakra-ui/react";
import SearchTab from "../components/layout/SearchTab";
import Layout from "../components/layout/Layout";

const App: NextPage = () => {
    return (
        <Layout>
            <SearchTab />
            <Divider orientation='horizontal' w='60%'/>
            <EventList />
        </Layout>
    );
}

export default App
