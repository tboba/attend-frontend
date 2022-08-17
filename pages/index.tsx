import type {NextPage} from 'next'
import EventList from "../components/events/EventList";
import {Divider, useMediaQuery} from "@chakra-ui/react";
import SearchTab from "../components/ui/SearchTab";
import Layout from "../components/layout/Layout";
import CenteredSubLayout from "../components/layout/CenteredSubLayout";
import React, {Fragment} from "react";
import SearchContextProvider from "../store/search-store";
import MainFooter from "../components/ui/MainFooter";
import MainHeader from "../components/ui/header/MainHeader";

const App: NextPage = () => {
    const [isMobile] = useMediaQuery('(max-width: 768px)');

    return (
        <Fragment>
            <Layout>
                <CenteredSubLayout>
                    <SearchContextProvider>
                        <MainHeader/>
                        <SearchTab/>
                        {!isMobile && <Divider orientation='horizontal' w='60%'/>}
                        <EventList/>
                        <MainFooter />
                    </SearchContextProvider>
                </CenteredSubLayout>
            </Layout>
        </Fragment>
    );
}

export default App;
