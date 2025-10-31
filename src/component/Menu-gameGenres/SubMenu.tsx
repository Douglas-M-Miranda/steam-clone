import { subDropdown } from "./subDropdown/SubDropdown";
import { ChevronDown, Search } from "lucide-react";
// import BrowseMenu from "./subDropdown/subDropdownCategories/BrowseMenu";
// import RecommendationsMenu from "./subDropdown/subDropdownCategories/RecommendationsMenu";
// import CategoriesMenu from "./subDropdown/subDropdownCategories/CategoriesMenu";
// import WaysToPlayMenu from "./subDropdown/subDropdownCategories/WaysToPlayMenu"
// import MoreMenu from "./subDropdown/subDropdownCategories/MoreMenu";
import styles from "./SubMenu.module.scss"

function SubMenu() {
    const teste = 1

    return (
        <nav className={styles.containerNav}>
            <ul>
                {subDropdown.map((sub) => (
                    <li key={sub.id}>
                        {sub.title}

                        <ChevronDown size={16} className={styles.icon} />
                    </li>
                ))}

                <form className={styles.containerForm}>
                    <input type="text" className={styles.searchInput} placeholder="Search the store" />

                    <button type="submit" className={styles.btnSubmit}>
                        <Search size={18} color="#fff" className={styles.iconSearch} />
                    </button>
                </form>
            </ul>
           

        </nav>
    );
}

export default SubMenu;