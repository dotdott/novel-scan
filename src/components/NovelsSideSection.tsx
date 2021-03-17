import styles from '../styles/components/NovelsSideSection.module.css';

interface NovelsSideSectionData {
    firstNovel: string;
    firstNovelHREF: string;
    secondNovel: string;
    secondNovelHREF: string;
}

export function NovelsSideSection({
    firstNovel, 
    firstNovelHREF,
    secondNovel,
    secondNovelHREF
    }: NovelsSideSectionData) {
    return (
        <div className={styles.otherNovels}>
            <a href={firstNovelHREF}>{firstNovel}</a>
            <a href={secondNovelHREF}>{secondNovel}</a>
        </div>
    )
}