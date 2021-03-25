import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>Simp Scan Novels</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="Simp Scan Novels"  content="Ler Novels e webnovels japoneses, coreanas e chinesas traduzidas em portugues Brasil PT-BR com novos capítulos praticamente todos os dias."/>
    </Head>

    
    <Component {...pageProps} />
    </>
  ) 
}

export default MyApp
