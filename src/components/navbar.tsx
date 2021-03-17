import { useState } from 'react'
import styles from '../styles/components/Navbar.module.css'

export function Navbar() {
    const [mobileMenu, setMobileMenu] = useState(false);

    return (
        <nav className={styles.navbar}>
        <ul>
            <li>
                <a href="/">
                    <img src="../simp-scan.svg" alt="Simp Scan logo" title="Ler novels PT-BR" className={styles.logo}/>
                </a>
            </li>

                <img 
                    src="../assets/menu-bars.svg" 
                    alt="Menu mobile" 
                    className={styles.hamburger} 
                    onClick={() => setMobileMenu(!mobileMenu)}
                />
            <div className={mobileMenu === false ? styles.modal : styles.modalActive}>

            <li className={styles.novels}>
                <a>
                    Novels
                    <span 
                        className={styles.closeModal} 
                        onClick={() => setMobileMenu(!mobileMenu)}>
                        X
                    </span>
                </a>
                    <a href="/RTMNovel" className={styles.hidden}>
                        Return of the 8th Class Mage
                    </a>      
                    <a href="/MonarchNovel" className={styles.hidden}>
                        I am the Monarch
                    </a> 
                    <a href="/KDGNovel" className={styles.hidden}>
                        Kumu Desu Ga, Nani ka?
                    </a>
         
            </li>

            <li className={styles.contact}>
                <a href='/Contact'>
                    Contato
                </a>
            </li>
            </div>
        </ul>
    </nav>
    )
}