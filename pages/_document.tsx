import {Head, Html, Main, NextScript} from "next/document";

const DocumentStructure: () => JSX.Element = () => {
    return <Html lang='en'>
        <Head>
            {/* Montserrat Light 300 Italic, Regular 400, SemiBold 600 */}
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;1,300&display=swap" rel="stylesheet" />
            {/* Acme 400 */}
            <link href="https://fonts.googleapis.com/css2?family=Acme&display=swap" rel="stylesheet" />
        </Head>
        <body>
        <Main/>
        <NextScript/>
        </body>
    </Html>
}

export default DocumentStructure;