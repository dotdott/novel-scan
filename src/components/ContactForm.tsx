import { useState } from 'react';
import styles from '../styles/components/ContactForm.module.css';

export function ContactForm() {
    const [isModalActive, setIsModalActive] = useState(false);

    function openModal(){
        setIsModalActive(true);
    }

    function exitModal() {
        setIsModalActive(false);
    }

    return (
        <div className={styles.container}>
            <form>
                <label htmlFor="username">Seu Nome</label>
                <input type="text" id="username" name="user_name"/>

                <label htmlFor="usermail">Seu e-mail para contato</label>
                <input type="email" id="usermail" name="user_mail" required />

                
            <label htmlFor="contact-reason">Selecione o motivo do contato</label> 
            <select name="contact-reason" id="contact-reason">
                <option value="v1">Erro de tradução</option>
                <option value="v1">Pedidos para traduções</option>
                <option value="v1">Outros</option>
            </select>
            
            <textarea 
                name="contact-description" 
                id="description" 
                cols={30}
                rows={10}
                placeholder="Escreva sua mensagem..."
            >
            </textarea>
            <button 
                type="submit"
                onClick={openModal}
            >
                Enviar
            </button>
        </form>

        {isModalActive && (
            <div className={styles.modal}>
                <h1>
                    Mensagem enviada com sucesso, responderemos em até 2 dias.
                    <span onClick={exitModal}>X</span>
                </h1>
            </div>
        )}
        </div>
    )
}