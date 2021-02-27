import Document, {Html, Head, Main, NextScript} from 'next/document';

export default class myDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="shortcut icon" href="teddy-bear.png" type="img/png"/>
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" />
                </Head>

                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}