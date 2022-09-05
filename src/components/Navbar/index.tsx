import styles from './style.module.css';

type NavbarProps = {
    selectedTab: string;
    toggleSelectedTab: (params: string) => void;
}

export default function Navbar(props: NavbarProps) {
    return (
        <nav className={styles.navbar}>
            <ul>
                <li
                    className={
                        props.selectedTab == "projects" ?
                            styles.selected :
                            ''
                    }
                    onClick={() => props.toggleSelectedTab("projects")}
                >
                    projetos
                </li>

                <li
                    className={
                        props.selectedTab == "skills" ?
                            styles.selected :
                            ''
                    }
                    onClick={() => props.toggleSelectedTab("skills")}
                >
                    habilidades
                </li>

                <li
                    className={
                        props.selectedTab == "about" ?
                            styles.selected :
                            ''
                    }
                    onClick={() => props.toggleSelectedTab("about")}
                >
                    sobre mim
                </li>

                <li
                    className={
                        props.selectedTab == "contact" ?
                            styles.selected :
                            ''
                    }
                    onClick={() => props.toggleSelectedTab("contact")}
                >
                    contato
                </li>
            </ul>
        </nav >
    );
}