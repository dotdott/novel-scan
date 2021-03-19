import styles from '../styles/components/HomeNovels.module.css';

interface HomeNovelsData {
    href: string;
    novelName: string;
    novelTitle: string;
    imgTitle: string;
    chapter: number;
    imgHref: string;
    release: string;
}

export function HomeNovels({
    href, 
    imgHref,
    novelName, 
    novelTitle, 
    imgTitle,
    chapter,
    release
    }: HomeNovelsData) {
    return (
        <div className={styles.wrapperPoster}>
            <a href={imgHref}>
                <h2>{novelTitle}</h2>
                    <figure>
                        <img src={novelName} alt={novelName} title={imgTitle}/>
                    </figure>
                </a>

            <div className={styles.checkMore}>
                <p>
                    <i className="fas fa-arrow-right"></i>
                    <a href={href}>
                        Capítulo {chapter}
                    </a>
                <small>{release}</small>
                </p>
            </div>
        </div>
    )
}