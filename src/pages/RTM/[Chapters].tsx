import Head from 'next/head'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import ChapterSelect from '../../components/chapters/ChapterSelect'
import { Navbar } from '../../components/navbar'
import { ChapterContext, ChapterProvider } from '../../contexts/ChapterContext'
import { DarkModeProvider } from '../../contexts/DarkModeContext'

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
                    title="Return of The 8th Class Mage"
                    href="../RTMNovel"
                    totalChapters={2}
                    route={'/RTM-CHAPTERS/'}
                    url={'/RTM/'}
                />

            </ChapterProvider>
        </DarkModeProvider>
        </>
    )
}