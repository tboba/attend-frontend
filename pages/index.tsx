import type {NextPage} from 'next'
import EventList from "../components/events/EventList";
import {Divider, useMediaQuery} from "@chakra-ui/react";
import SearchTab from "../components/ui/SearchTab";
import Layout from "../components/layout/Layout";
import CenteredSubLayout from "../components/layout/CenteredSubLayout";
import {Fragment} from "react";
import MainFooter from "../components/ui/MainFooter";

const App: NextPage = () => {
    const [isMobile] = useMediaQuery('(max-width: 768px)');

    return (
        <Fragment>
            <Layout>
                {/*<MainHeader />*/}
                <CenteredSubLayout>
                    <SearchTab/>
                    {!isMobile && <Divider orientation='horizontal' w='60%'/>}
                    <EventList/>
                    <MainFooter />
                </CenteredSubLayout>
            </Layout>
        </Fragment>
    );
}

export default App;
