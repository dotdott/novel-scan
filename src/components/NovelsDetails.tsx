import styles from '../styles/components/NovelsDetails.module.css';

interface NovelsDetailsData {
    novelTitle: string;
    imgSource: string;
    imgAlt: string;
    imgTitle: string;
    genres: string;
    chapters: string;
    authorNameENG: string;
    authorNameOriginal: string;
    novelType: string;
}

export function NovelsDetails({
    novelTitle,
    imgSource,
    imgAlt,
    imgTitle,
    genres,
    chapters,
    authorNameENG,
    authorNameOriginal,
    novelType
}: NovelsDetailsData) {
    return(
        <div className={styles.novelInfo}>
            <a href="#">
                <h2>{novelTitle}</h2>
                <img src={imgSource} alt={imgAlt} title={imgTitle} />
            </a>

            <div className={styles.subInfo}>
                <h3>Genêros</h3>
                <p>{genres}</p>

                <h3>Capitulos</h3>
                <p>{chapters}</p>
                    
                <h3>Autor</h3>
                <p>
                    {authorNameENG}<br />
                    <i>{authorNameOriginal}</i>
                </p>
                <h3>Tipo</h3>
                <p>{novelType}</p>
            </div>            
        </div>
    )
}