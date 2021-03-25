import { useState } from 'react';
import styles from '../styles/components/ContactForm.module.css';

export function ContactForm() {
    const [isModalActive, setIsModalActive] = useState(false);

    const [username, setUsername] = useState('');

    const [modalMessage, setModalMessage] = useState('');

    const [emailAddress, setEmailAddress] = useState('');

    const [contactReason, setContactReason] = useState('requests');

    const [contactDescription, setContactDescription] = useState('');


    function openModal(){
        setIsModalActive(true);
    }

    function exitModal() {
        setIsModalActive(false);
    }
    
    function submitForm(e){
        e.preventDefault()

        if(username && emailAddress && emailAddress && contactDescription !== ''){
            setModalMessage('Dados enviados com sucesso!')
            openModal();

            setUsername('');
            setEmailAddress('');
            setContactDescription('');
        } else {
            setModalMessage('Por favor preencha todos os campos!')
            openModal();
            console.log('oi?')
        };
    }


    return (
        <div className={styles.container}>
            <form onSubmit={e => submitForm(e)} noValidate>
                <label htmlFor="username" >Seu Nome</label>
                <input 
                    type="text" 
                    id="username"
                    name="user_name" 
                    onChange={e => setUsername(e.target.value)} 
                    value={username}
                />

                <label htmlFor="usermail">Seu e-mail para contato</label>
                <input 
                    type="email" 
                    id="usermail" 
                    name="user_mail" 
                    onChange={e => setEmailAddress(e.target.value)}
                    value={emailAddress}
                    required 
                />

                
            <label htmlFor="contact-reason">Selecione o motivo do contato</label> 
            <select 
                name="contact-reason" 
                id="contact-reason" 
                onChange={e => setContactReason(e.target.value)}
                value={contactReason}
            >
                <option value="error-tr">Erro de tradução</option>
                <option value="requests">Pedidos para traduções</option>
                <option value="others">Outros</option>
            </select>
            
            <textarea 
                name="contact-description" 
                id="description" 
                cols={30}
                rows={10}
                placeholder="Escreva sua mensagem..."
                onChange={e => setContactDescription(e.target.value)}
                value={contactDescription}
            >
            </textarea>
            <button 
                type="submit"
            >
                Enviar
            </button>
        </form>

        {isModalActive && (
            <div className={styles.modal}>
                <h1>                          
                    {modalMessage}
                    <span onClick={exitModal}>X</span>
                </h1>
            </div>
        )}
        </div>
    )
}