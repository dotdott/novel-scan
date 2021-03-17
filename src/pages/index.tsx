import { HomeNovels } from '../components/HomeNovels'
import { Navbar } from '../components/navbar'

export default function Home() {
  return (
    <>
    <Navbar />
    
      <h1 className="home-title">Ultimos lançamentos</h1>

    <div className="wrapperHome">
      <HomeNovels 
        href= '/RTM/C1'
        novelName= '8th.jpg'
        novelTitle= "Return of The 8th Class Mage"
        imgTitle= "Ler Return of The 8th Class Mage em pt-br"
        chapter={2}
        imgHref='./RTMNovel'
      />      
      
      <HomeNovels 
        href= '/KDG/C1'
        novelName= 'kumo-desu-poster.jpeg'
        novelTitle= "Kumo Desu ga, Nani ka?"
        imgTitle= "Ler the Kumo Desu ga, Nani ka? em pt-br"
        chapter={1}
        imgHref='./KDGNovel'
      />  

      <HomeNovels 
        href= '/Monarch/C5'
        novelName= 'Monarch.jpeg'
        novelTitle= "I am the Monarch"
        imgTitle= "Ler I am the Monarch em pt-br / ler Eu sou o Monarca"
        chapter={5}
        imgHref='./MonarchNovel'
      />

    </div>
    </>
  )
}
