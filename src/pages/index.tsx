import { HomeNovels } from '../components/HomeNovels'
import { Navbar } from '../components/navbar'

export default function Home() {
  return (
    <>
    <Navbar />
      <h1 className="home-title">Novels sendo traduzidas no momento</h1>
    <div className="wrapper">
      <HomeNovels 
        href= '/TNENovel'
        novelName= 'extra-poster.jpg'
        novelTitle= "The Novel's Extra"
        imgTitle= "Ler The novel's extra em pt-br"
      />      
      
      <HomeNovels 
        href= '#'
        novelName= 'kingdom-poster.jpg'
        novelTitle= "Kingdom's Bloodline"
        imgTitle= "Ler the Kingdom's bloodline em pt-br"
      />  

      <HomeNovels 
        href= '#'
        novelName= 'deathmage-poster.jpg'
        novelTitle= "The Death Mage"
        imgTitle= "Ler The Death Mage em pt-br"
      />

    </div>
    </>
  )
}
