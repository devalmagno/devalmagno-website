import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

import styles from "./style.module.css";

export default function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebar__icon}>
                <a href="https://github.com/devalmagno" target="_blank">
                    <FaGithubSquare /> 
                </a>
            </div>
            <div className={styles.sidebar__icon}>
                <a href="https://www.linkedin.com/in/devalmagno/" target="_blank">
                    <FaLinkedin /> 
                </a>
            </div>
        </div>
    );
}