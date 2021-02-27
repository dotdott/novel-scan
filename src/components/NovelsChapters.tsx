import { useState } from 'react';
import styles from '../styles/components/NovelsChapters.module.css';

export function NovelsChapters() {
    const [count, setCount] = useState(1);
    const [chapters, setChapters] = useState([1])
    


    return(
        <div className={styles.novelsChapters}>
            {chapters.map(chapter => {
                if(chapters.length <= 20){
                    setCount(count + 1);
                    setChapters([...chapters, count])
                }
                return(
                    <a href="#">Capítulo {chapter}</a>
                    )
            })}
            <div className={styles.button}>
                <button>Show more</button>
            </div>
        </div>
    )
}