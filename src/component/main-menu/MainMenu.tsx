import { Link } from "react-router-dom";
import logo from "../../assets/logo_steam.svg"
import styles from "./mainMenu.module.scss"
import { ChevronDown, HardDriveDownload } from "lucide-react";
import { dropdownItems } from "./Dropdown-items/DropdownItems";
import { useState } from "react";



function MainMenu() {
    const [isOpen, setIsOpen] = useState<number | null >(null)
 
    return (
        <header className={styles.containerMenuNave}>
            <div className={styles.menuLogo}>
                <Link to="/"><img src={logo} alt="logo steam" /></Link>
            </div>

            <nav className={styles.containerNave}>
                <ul>
                    {dropdownItems.map((i) => (
                        <li key={i.id}>
                            <Link 
                            to="/" 
                            className={styles.naveItem}
                            onMouseEnter={() => setIsOpen(i.id)}
                            onMouseLeave={() => setIsOpen(null)}
                            >
                            {i.title}
                           
                            {isOpen ===  i.id &&(
                                <ul className={styles.containerDropdown}>
                                     {i.name.map((subItem, index) => (
                                    <li key={index} className={styles.dropdownItem}>
                                        {subItem}
                                    </li>
                                     ))}
                                </ul>
                            )}
                            </Link>
                        </li>
                    ))}
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