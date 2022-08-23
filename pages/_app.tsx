import type {AppProps} from 'next/app'
import {ChakraProvider, Divider, useMediaQuery} from "@chakra-ui/react";
import Layout from "../components/layout/Layout";
import CenteredSubLayout from "../components/layout/CenteredSubLayout";
import MainHeader from "../components/ui/header/MainHeader";
import MainFooter from "../components/ui/MainFooter";
import React from "react";
import UserContextProvider from "../store/user-store";

function MyApp({Component, pageProps}: AppProps) {
    const [isMobile] = useMediaQuery('(max-width: 768px)');

    return <ChakraProvider>
        <Layout>
            <CenteredSubLayout>
                <UserContextProvider>
                    <MainHeader/>
                    {!isMobile && <Divider orientation='horizontal' w='60%'/>}
                    <Component {...pageProps} />
                </UserContextProvider>

                <MainFooter/>
            </CenteredSubLayout>
        </Layout>
    </ChakraProvider>
}

export default MyApp
