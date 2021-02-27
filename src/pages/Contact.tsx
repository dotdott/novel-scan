import Head from 'next/head';
import { ContactForm } from '../components/ContactForm';
import { Navbar } from '../components/navbar';

export default function Contact() {
    return (
        <>
        <Head>
            <title>Contato</title>
        </Head>
        
        <Navbar />
        <ContactForm />
        </>
    )
}