import { useContext, useEffect, useState } from 'react'
import { ChapterContext } from '../../contexts/ChapterContext';
import { DarkModeContext } from '../../contexts/DarkModeContext';
import styles from '../../styles/components/chapters/ChapterSelect.module.css'
import { ChapterDisplay } from './ChapterDisplay';
import { useRouter } from 'next/router';

export default function ChapterSelect({
    title,
    href,
    totalChapters,
    route,
    url
}) {
    const { darkMode, readMode } = useContext(DarkModeContext);

    const { chapter, setChapterRoute } = useContext(ChapterContext);

    const [count, setCount] = useState(1);

    const [chapters, setChapter] = useState([0]);

    const options = chapters.map(chapter => {
        if(chapters.length <= totalChapters){
            setCount(count + 1);
            setChapter([...chapters, count])
        }
        return(
            <option value={"C" + chapter} key={chapter}>
                C{chapter}
            </option>
            )
    });

    const router = useRouter();

    const { query } = useRouter();
    
    useEffect(() => {
        const chap = query.Chapters;

        chapter(route, chap);

    }, [query])

    function selectChapter(e: any) {
        const chap = e.target.value;

        setChapterRoute(chap);

        router.push(url + chap);

        chapter(route, chap);
    }

     

    return(
    <div className={"containerChapters " + readMode}>
          <a href={href}>
                <h1>{title}</h1>
            </a>
        <div className={styles.chapterSelect}>
            <label 
                htmlFor="chapterChosen" 
                className={readMode === 'dark' ? styles.dark : styles.light}
            >
                Selecione o capítulo
            </label>

            <select 
                name="chapterChosen" 
                id="chapterChosen" 
                value={query.Chapters} 
                onChange={e => selectChapter(e)}
            >
                {options}
            </select>

            <select 
                name= "readMode" 
                id= "readMode"
                className= {styles.readMode} 
                onChange= {() => darkMode()}
                value={readMode}
            >
                <option value='light'>
                    Light
                </option>
                <option value='dark'>
                    Dark
                </option>
            </select>
        </div>
            <ChapterDisplay
                tag={query.Chapters}
                url={url}
            />
    </div>
    )
}