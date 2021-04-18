import Head from "next/head";
import CHAPTER from '../components/chapters/CHAPTER_DATA';

import { Navbar } from "../components/navbar";
import { NovelsChapters } from "../components/NovelsChapters";
import { NovelsDescriptions } from "../components/NovelsDescription";
import { NovelsDetails } from "../components/NovelsDetails";
import { NovelsSideSection } from "../components/NovelsSideSection";

import styles from '../styles/pages/NovelsModel.module.css'

export default function KDGNovel() {
    const value = `
    <p>Em um mundo onde o Herói e o Rei Demonio continuam se antagonizando.</p><br/>
    <p> A grandiosa mágia do Herói e do Rei Demonio se espalhou pelo mundo e explodiu em uma sala de aula de um certo colegial.</p><br/>

    <p>Os estudantes que morreram na explosão foram reincarnados em um mundo diferente.</p><br/>
    <p>A protagonista, que tinha a menor reputação da classe, foi reincarnada em uma aranha. No entanto, ela rapidamente se adaptou a situação que foi jogada com grande força de vontade.</p><br/>

<p>Essa é a história dela, que se tornou uma aranha e está fazendo tudo o que ela pode para sobreviver.
 `

    return (
      <>
        <Head>
            <title>KDG Novel</title>
        </Head>

        <Navbar />

        <div className={styles.wrapperContainer}>
            <div className={styles.container}>
                <NovelsDetails 
                    novelTitle= "Kumo Desu Ga"
                    imgSource= "kumo-desu-poster.jpeg"
                    imgAlt= "Capa Kumo Desu Ga, Nani Ka?"
                    imgTitle= "Capa Kumo Desu Ga, Nani Ka?"
                    genres= "Ação Aventura Comedia Drama Fantasia Mistério Ficção-Cientifica Seinen"
                    status = "Em andamento"
                    chapters= {CHAPTER().KDG_LAST + '/' + CHAPTER().KDG_TOTAL}
                    authorNameENG= "Baba Okina"
                    authorNameOriginal= "輝竜司"
                    novelType= "Japonesa"                    
                />

                <div className={styles.novelContent}>
                    <NovelsDescriptions 
                        Description={value}
                    />

                    <NovelsChapters 
                        totalChapters= {CHAPTER().KDG_LAST + 1}
                        href= "/Kumo_Desu_ga_Nani_ka/C"
                    />
                </div>


                <NovelsSideSection 
                    firstNovel= "Return of The 8th Class Mage"
                    firstNovelHREF= '/Return_of_the_8th_Class_Mage'
                    secondNovel= "I am the Monarch"
                    secondNovelHREF= './I_am_the_Monarch'
                />

            </div>
        </div>
      </>
    )
}