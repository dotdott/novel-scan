import styles from '../styles/components/HomeNovels.module.css';

interface HomeNovelsData {
    href: string;
    novelName: string;
    novelTitle: string;
    imgTitle: string;
}

export function HomeNovels({
    href, 
    novelName, 
    novelTitle, 
    imgTitle
    }: HomeNovelsData) {
    return (
        <div className={styles.wrapperPoster}>
            <h2>{novelTitle}</h2>
                <a href={href}>
                    <figure>
                        <img src={novelName} alt={novelName} title={imgTitle}/>
                    </figure>
                </a>

            <div className={styles.checkMore}>
                <p>
                    <i className="fas fa-arrow-right"></i>
                    <a href={href}>
                        Cheque mais informações e os capítulos aqui
                    </a>
                </p>
            </div>
        </div>
    )
}