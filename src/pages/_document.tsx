import Document, {Html, Head, Main, NextScript} from 'next/document';

export default class myDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="shortcut icon" href="teddy-bear.png" type="img/png"/>
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,400;0,500;0,600;0,700;1,200;1,600;1,700&display=swap" rel="stylesheet" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
                </Head>

                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}