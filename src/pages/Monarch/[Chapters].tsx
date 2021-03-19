import Head from 'next/head';
import CHAPTER from '../../components/chapters/CHAPTER_DATA';
import ChapterSelect from '../../components/chapters/ChapterSelect';

import { useRouter } from 'next/router';

import { Navbar } from '../../components/navbar';
import { ChapterProvider } from '../../contexts/ChapterContext';
import { DarkModeProvider } from '../../contexts/DarkModeContext';

export default function Chapters(){
    const { query } = useRouter();

    return(
        <>
        <Head>
        <link rel="icon" href="../../teddy-bear.png" type="img/png"/>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" />

            <title>{query.Chapters}</title>
        </Head>
        <Navbar />

        <DarkModeProvider>
            <ChapterProvider>

                <ChapterSelect 
                    title="I am the Monarch"
                    href="../MonarchNovel"
                    totalChapters={CHAPTER().Monarch_LAST}
                    route={'/MONARCH-CHAPTERS/'}
                    url={'/Monarch/'}
                />

            </ChapterProvider>
        </DarkModeProvider>
        </>
    )
}