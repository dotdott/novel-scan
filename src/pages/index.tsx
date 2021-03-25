import CHAPTER from '../components/chapters/CHAPTER_DATA';
import { HomeNovels } from '../components/HomeNovels';
import { Navbar } from '../components/navbar';

export default function Home() {

  return (
    <>
    <Navbar />
    
      <h1 className="home-title">Ultimos lançamentos</h1>

    <div className="wrapperHome">
      <HomeNovels 
        href= {'/RTM/C' + CHAPTER().RTM_LAST}
        novelName= '8th.jpg'
        novelTitle= "Return of The 8th Class Mage"
        imgTitle= "Ler Return of The 8th Class Mage em pt-br"
        chapter={CHAPTER().RTM_LAST}
        imgHref='./Return_of_the_8th_Class_Mage'
        release={CHAPTER().RTM_RELEASE}
      />      
      
      <HomeNovels 
        href= {'/KDG/C' + CHAPTER().KDG_LAST} 
        novelName= 'kumo-desu-poster.jpeg'
        novelTitle= "Kumo Desu ga, Nani ka?"
        imgTitle= "Ler the Kumo Desu ga, Nani ka? em pt-br"
        chapter={CHAPTER().KDG_LAST}
        imgHref='./Kumo_Desu_ga_Nani_ka'
        release={CHAPTER().KDG_RELEASE}        
      />  

      <HomeNovels 
        href= {'/I_am_the_Monarch/C' + CHAPTER().Monarch_LAST}
        novelName= 'Monarch.jpeg'
        novelTitle= "I am the Monarch"
        imgTitle= "Ler I am the Monarch em pt-br / ler Eu sou o Monarca"
        chapter={CHAPTER().Monarch_LAST}
        imgHref='./I_am_the_Monarch'
        release={CHAPTER().Monarch_RELEASE}
      />

    </div>
    </>
  )
}
