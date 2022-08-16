import type {NextPage} from 'next'
import EventList from "../components/events/EventList";
import {Divider, useMediaQuery} from "@chakra-ui/react";
import SearchTab from "../components/layout/SearchTab";
import Layout from "../components/layout/Layout";
import CenteredSubLayout from "../components/layout/CenteredSubLayout";

const App: NextPage = () => {
    const [isMobile] = useMediaQuery('(max-width: 768px)');

    return (
        <Layout>
            {/*<MainHeader />*/}
            <CenteredSubLayout>
                <SearchTab/>
                {!isMobile &&<Divider orientation='horizontal' w='60%'/>}
                <EventList/>
            </CenteredSubLayout>
        </Layout>
    );
}

export default App;
