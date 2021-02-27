import Head from "next/head";
import { Navbar } from "../components/navbar";
import { NovelsChapters } from "../components/NovelsChapters";
import { NovelsDescriptions } from "../components/NovelsDescription";
import { NovelsDetails } from "../components/NovelsDetails";
import { NovelsSideSection } from "../components/NovelsSideSection";


import styles from '../styles/components/TNENovel.module.css'

export default function TNGNovel() {
    const value =   `<p>Acordando, Kim Hajin se encontra em um mundo familiar porém em um corpo diferente.</br>
                </br>
                    Um mundo que ele mesmo havia criado em sua história, uma história ainda incompleta.</br>
                </br>
                    Ele havia se tornado um extra, um personagem usado apenas para preencher espaço, sem qualquer importância para a história em sí.</br>
                </br>
                    A única pista para escapar de daquele mundo era ficar próximos dos desfeixos principais da história.</br> 
                </br>
                    No entanto, ele descobre que o mundo que ele criou não era exatamente identico ao que ele havia escrito.</br></p>`


    return (
        <>
        <Head>
            <title>TNG Novel</title>
        </Head>

        <Navbar />

        <div className={styles.wrapperContainer}>
            <div className={styles.container}>
                <NovelsDetails
                    novelTitle= "The Novel's Extra"
                    imgSource= "extra-poster.jpg"
                    imgAlt= "Capa The Novel's Extra"
                    imgTitle= "Capa The Novel's Extra"
                    genres= "Ação Aventura Drama Fantasia Vida-Academica Sobrenatural"
                    chapters= "70/360"
                    authorNameENG= "Jee Gab Song"
                    authorNameOriginal= "지갑송"
                    novelType= "Coreana"
                />

                <div className={styles.novelContent}>
                    <NovelsDescriptions 
                        Description={value}
                    />

                    <NovelsChapters />
                </div>

                <NovelsSideSection />
            </div>
        </div>

        </>
    )
}