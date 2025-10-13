import { subDropdown } from "./subDropdown/SubDropdown";
import { ChevronDown, Search } from "lucide-react";
import styles from "./SubMenu.module.scss"

function SubMenu() {
    return(
        <nav className={styles.containerNav}>
            <ul>
                {subDropdown.map((sub) => (
                    <li key={sub.id}>
                        {sub.title}

                        <ChevronDown size={16} className={styles.icon}/>
                    </li>
                ))}
            </ul>

            <form className={styles.containerForm}>
                <input type="text" className={styles.searchInput} placeholder="Search the store"/>

                <button type="submit" className={styles.btnSubmit}>
                    <Search size={18} color="#fff" className={styles.iconSearch}/>
                </button>
            </form>
        </nav>
    );
}

export default SubMenu;