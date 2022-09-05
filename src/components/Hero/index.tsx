import Image from 'next/image';

import styles from "./style.module.css";

export default function Hero() {
    return (
        <div className={styles.hero_container}>
            <svg viewBox="0 0 1920 518" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M0 518L80 451C160 384 320 250 480 240C640 230 800 346 960 374C1120 403 1280 346 1440 278C1600 211 1760 134 1840 96L1920 58V0H1840C1760 0 1600 0 1440 0C1280 0 1120 0 960 0C800 0 640 0 480 0C320 0 160 0 80 0H0V518Z" fill="#1A1B21" fillOpacity="0.8" />
            </svg>

            <div className={styles.hero__main}>
                <div className={styles.main__text}>
                    <h1>{'<Devalmagno />'}</h1>
                    <span>Oi, me chamo Lúcio Magno e sou um <strong>Engenheiro de Software</strong></span>
                </div>

                <div className={styles.main__image}>
                    <Image
                        width={400}
                        height={350}
                        src="/images/hero-image.png"
                    />
                </div>
            </div>
        </div>
    );
}