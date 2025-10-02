import { Link } from "react-router-dom";
import logo from "../../assets/logo_steam.svg"
import styles from "./mainMenu.module.scss"
import { ChevronDown, HardDriveDownload } from "lucide-react";

function MainMenu() {

    return (
        <header className={styles.containerMenuNave}>
            <div className={styles.menuLogo}>
                <Link to="/"><img src={logo} alt="logo steam" /></Link>
            </div>

            <nav className={styles.containerNave}>
                <ul>
                    <li>
                        <Link to="/" className={styles.naveItem}>
                            STORE
                        </Link>
                    </li>

                    <li>
                        <Link to="/" className={styles.naveItem}>
                            COMMUNITY
                        </Link>
                    </li>

                    <li>

                        <Link to="/" className={styles.naveItem}>
                            INKY
                        </Link>
                    </li>

                    <li>
                        <Link to="/" className={styles.naveItem}>
                            CHAT
                        </Link>
                    </li>

                    <li>
                        <Link to="/" className={styles.naveItem}>
                            SUPPORT
                        </Link>
                    </li>
                </ul>

                <div className={styles.asideMenu}>
                    <div className={styles.asideInstall}>
                        <button>
                            <HardDriveDownload size={18} color="#ffffff" />
                            <span>Install Steam</span>
                        </button>
                    </div>

                    <div className={styles.asideLogin}>
                        <Link to="/" className={styles.asideLink}>
                            login
                        </Link>
                    </div>

                    |
                    
                    <div className={styles.asideLanguage}>
                        <Link to="/" className={styles.asideLink}>
                            Language
                            <ChevronDown size={15} />
                        </Link>
                    </div>
                </div>

            </nav>
        </header>
    );
}

export default MainMenu