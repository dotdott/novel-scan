import Head from 'next/head'
import CHAPTER from '../components/chapters/CHAPTER_DATA';

import { Navbar } from '../components/navbar'
import { NovelsChapters } from '../components/NovelsChapters'
import { NovelsDescriptions } from '../components/NovelsDescription'
import { NovelsDetails } from '../components/NovelsDetails'
import { NovelsSideSection } from '../components/NovelsSideSection'

import styles from '../styles/pages/NovelsModel.module.css'

export default function TDMNovel() {
    const value = `
    <p>Roan à 20 anos atrás fugiu da sua vila rural com o objetivo de obter o título de alto escalão Grande General. No entanto, tudo o que ele conseguiu 20 anos depois, foi apenas um punhado de ddinheiro e o título de baixo escalão Comandante do Esquadrão da Primeira Legião.</br>
</br>
    E no fim, ele se tornou um corpo gelado no campo de batalha... mas misteriosamente, ele voltou de volta ao passado.</br>
</br>
  "Certo. Desta vez, eu não vou me tornar um Grande General, mas sim um Monarca."</br>
</br>
    Na sua vida passada, seu objetivo era o título de Grande General, mas, ele apenas se tornou um Lanceiro Comandante de Esquadrão.
</br>
</br>
    Desta vez, o objetivo da sua vida era se tornar um Monarca.
</br>
</br>
    "Então eu acho que eu deva ao menos me tornar um General, certo?"
</br>
</br>
    Roan, que tinha memórias de 20 anos a frente no futuro, começa agora sua imparável trajetória.
</p>`

    return(
    <>
        <Head>
            <title>Monarch Novel</title>
        </Head>

        <Navbar />

        <div className={styles.wrapperContainer}>
            <div className={styles.container}>
                <NovelsDetails 
                    novelTitle= "I am the Monarch"
                    imgSource= "./Monarch.jpeg"
                    imgAlt= "ler I am the Monarch / ler Eu sou o monarca"
                    imgTitle= "ler I am the Monarch / ler Eu sou o monarca"
                    status = "Em andamento"
                    genres= "Ação Fantasia Artes-Marciais Seinen Eu-Sou-O-Monarca"
                    chapters= {CHAPTER().Monarch_LAST + '/' + CHAPTER().Monarch_TOTAL}
                    authorNameENG= "Cheol Jonggeum"
                    authorNameOriginal= "철종금"
                    novelType= "Coreana"                
                />

            
                <div className={styles.novelContent}>
                    <NovelsDescriptions
                        Description={value}
                    />

                    <NovelsChapters 
                        totalChapters= {CHAPTER().Monarch_LAST + 1}
                        href= "/Monarch/C"
                    />
                </div>

                <NovelsSideSection
                    firstNovel= "Kumo Desu ga, Nani ka?"
                    firstNovelHREF= '/KDGNovel'
                    secondNovel= "Return of The 8th Class Mage"
                    secondNovelHREF= '/RTMNovel'
                />

            </div>
        </div>
    </>
    )
}