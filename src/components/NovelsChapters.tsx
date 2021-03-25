import { useState } from 'react';
import styles from '../styles/components/NovelsChapters.module.css';

interface NovelsChaptersData {
    totalChapters: number;
    href: string;
    novelName: string;
}

export function NovelsChapters({
        totalChapters,
        href,
        novelName
    }: NovelsChaptersData) {
    const [count, setCount] = useState(1);
    const [chapters, setChapters] = useState([0]) 

    return(
        <div className={styles.novelsChapters}>
            {chapters.map(chapter => {
                if(chapters.length < totalChapters){
                    setCount(count + 1);
                    setChapters([...chapters, count])
                }
                return(
                    <a href={href + chapter} key={chapter} title={novelName + chapter}>
                        Capítulo {chapter}
                    </a>
                    )
            })}
            <div className={styles.button}>
                <button>Show more</button>
            </div>
        </div>
    )
}