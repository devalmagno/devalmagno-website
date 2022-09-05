import Image from 'next/image';

import styles from './style.module.css';

export default function Project() {
    return (
        <div className={styles.card}>
            <img
                src="/images/test-image.png"
                // width={316}
                // height={177}
                className={styles.card__image}
            />
            <div className={styles.card__info}>
                <h2>Meme Generator</h2>
                <p>
                    Um Gerador de Memes que pode ser utilizado
                    diretamente pelo navegador. Desenvolvido com
                    React.
                </p>
                <a href="#">Acessar Meme Generator</a>
            </div>
        </div>
    );
}