import type {NextPage} from 'next'
import EventList from "../components/events/EventList";
import {Divider} from "@chakra-ui/react";
import SearchTab from "../components/layout/SearchTab";
import Layout from "../components/layout/Layout";
import CenteredSubLayout from "../components/layout/CenteredSubLayout";

const App: NextPage = () => {
    return (
        <Layout>
            <CenteredSubLayout>
                <SearchTab/>
                <Divider orientation='horizontal' w='60%'/>
                <EventList/>
            </CenteredSubLayout>
        </Layout>
    );
}

export default App;
