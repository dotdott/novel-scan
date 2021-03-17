import { useRouter } from 'next/router';
import { useContext } from 'react';
import { ChapterContext } from '../../contexts/ChapterContext';
import { DarkModeContext } from '../../contexts/DarkModeContext';
import styles from '../../styles/components/chapters/ChapterDisplay.module.css';

export function ChapterDisplay({ tag, url }) {
    const { readMode } = useContext(DarkModeContext);

    const { chapterContent } = useContext(ChapterContext);

    const { query } = useRouter();

    const router = useRouter();

    
    function nextChapter(){
        const chapNumber = Number(query.Chapters.slice(1));

        const chap = chapNumber + 1;

        router.push(url + 'C' + chap);
    }

    function previousChapter() {
        const chapNumber = Number(query.Chapters.slice(1));

        const chap = chapNumber - 1;
        
        router.push(url + 'C' + chap);
    }

    return (
        <div className={styles.chapterDisplay}>
            <h2 className={readMode === 'dark' ? styles.dark : styles.light}>
                Capítulo {tag}
            </h2>
            
            <div className={readMode === 'dark' ? styles.chapterContentDark : styles.chapterContent}>
                <pre>
                    {chapterContent}
                </pre>
                <div className={styles.buttonClass}>
                    <a 
                        className="previousButton" 
                        onClick={() => previousChapter()}
                    >
                        Previous
                    </a>
                    
                    <a 
                        className="nextButton" 
                        onClick={() => nextChapter()}
                    >
                        Next
                    </a>
                </div>
            </div>
        </div>
    )
}