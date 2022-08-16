import {Head, Html, Main, NextScript} from "next/document";

const DocumentStructure: () => JSX.Element = () => {
    return <Html lang='en'>
        <Head>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;1,300&display=swap" rel="stylesheet" />
        </Head>
        <body>
        <Main/>
        <NextScript/>
        </body>
    </Html>
}

export default DocumentStructure;