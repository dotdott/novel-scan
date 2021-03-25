import Head from "next/head";
import CHAPTER from '../components/chapters/CHAPTER_DATA';

import { Navbar } from "../components/navbar";
import { NovelsChapters } from "../components/NovelsChapters";
import { NovelsDescriptions } from "../components/NovelsDescription";
import { NovelsDetails } from "../components/NovelsDetails";
import { NovelsSideSection } from "../components/NovelsSideSection";

import styles from '../styles/pages/NovelsModel.module.css';



export default function TNGNovel() {
    const value =   `<p>O primeiro Mago da 8° Classe da Humanidade</br>
                </br>
                    Traído, ele voltou 30 anos atrás no passado.</br>
                </br>
                    A história segue Ian Page, um Arquimago e o primeiro homem a superar a 6° Classe, logo depois a 7° Classe, e então a 8° Classe de Magos.</br>
                </br>
                    Depois de uma vida inteira de guerras e matanças, o continente finalmente tinha se unificado graças aos seus esforços. Agora, velho, seu desejo era apenas viver o resto de sua vida em paz e tentar achar salvação para todo o sangue que ele derramou. No entanto, seu velho amigo, enlouquecido em sua própria paranoia, ele não conseguia tolerar alguém tão poderoso, então ele traiu Ian e o matou.</br> 
                </br>
                    Ian em seus ultimos suspiros de vida, ele conjurou uma mágia qque permitia ele voltar de volta ao tempo quando ele era apenas um jovem menino. Com todo o conhecimento que ele previamente tinha, ele decidiu realizar escolhas melhores para que ele possa viver sem arrependimentos. </br></p>`
    

    return (
        <>
        <Head>
        <title>Return of The 8th Class Mage Novel (pt-br)</title>
            <meta name="Return of The 8th Class Mage (Retorno do Mago da 8° Classe) Novel (pt-br)" content="Capítulos traduzidos em pt-BR da novel coreana Return of The 8th Class Mage (Retorno do Mago da 8° Classe)" />
        </Head>

        <Navbar />

        <div className={styles.wrapperContainer}>
            <div className={styles.container}>
                <NovelsDetails
                    novelTitle= "Return of The 8th Class Mage"
                    imgSource= "8th.jpg"
                    imgAlt= "ler Return of The 8th Class Mage / ler O retorno do mago da 8° Classe."
                    imgTitle= "ler Return of The 8th Class Mage / ler O retorno do mago da 8° Classe."
                    genres= "Ação Fantasia Tragédias -O Retorno do mago da 8° Classe-"
                    status = "Em andamento"
                    chapters= {CHAPTER().RTM_LAST + '/' + CHAPTER().RTM_TOTAL}
                    authorNameENG= "Saseum"
                    authorNameOriginal= "류송"
                    novelType= "Coreana"
                />

                <div className={styles.novelContent}>
                    <NovelsDescriptions 
                        Description={value}
                    />

                    <NovelsChapters 
                        totalChapters={CHAPTER().RTM_LAST + 1}
                        href={'/Return_of_the_8th_Class_Mage/C'}
                        novelName="Ler Return of the 8th Class Mage Capítulo "
                    />
                </div>

                <NovelsSideSection 
                    firstNovel= "Kumo Desu ga, Nani ka?"
                    firstNovelHREF= '/Kumo_Desu_ga_Nani_ka'
                    secondNovel= "I am the Monarch"
                    secondNovelHREF= '/I_am_the_Monarch'
                />
            </div>
        </div>

        </>
    )
}