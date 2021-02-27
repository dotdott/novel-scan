import styles from '../styles/components/NovelsDescriptions.module.css';


export function NovelsDescriptions({Description}) {
    return (
        <div className={styles.novelDescription}>
            <h2>Sinopse</h2>
            <div className={styles.description}>
                <div dangerouslySetInnerHTML={{ __html: Description }}/>
            </div>
        </div>
    )
}