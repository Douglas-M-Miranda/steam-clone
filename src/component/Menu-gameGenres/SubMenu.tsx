import { subDropdown } from "./subDropdown/SubDropdown";
import { ChevronDown, Search } from "lucide-react";
import BrowseMenu from "./subDropdown/subDropdownCategories/BrowseMenu";
import RecommendationsMenu from "./subDropdown/subDropdownCategories/RecommendationsMenu";
import CategoriesMenu from "./subDropdown/subDropdownCategories/CategoriesMenu";
import WaysToPlayMenu from "./subDropdown/subDropdownCategories/WaysToPlayMenu"
import MoreMenu from "./subDropdown/subDropdownCategories/MoreMenu";
import styles from "./SubMenu.module.scss"
import { useEffect, useState } from "react";

type SubMenuProps = {
    closeItem: boolean;
    setCloseItem: React.Dispatch<React.SetStateAction<boolean>>;
}

function SubMenu({ closeItem, setCloseItem }: SubMenuProps) {
    const [dropDownId, setDropDownId] = useState<number | null>(null)

    useEffect(() => {
        if (closeItem === true) {
            setDropDownId(null)
        }

        console.log("alou")

    }, [closeItem]);

    useEffect(() => {
        if (dropDownId !== null) {
            setCloseItem(false);
        }
    }, [dropDownId]);

    const dropdownMenu = (() => {
        if (dropDownId === 1) {
            return <BrowseMenu />
        } else if (dropDownId === 2) {
            return <RecommendationsMenu />
        }
        else if (dropDownId === 3) {
            return <CategoriesMenu />
        }
        else if (dropDownId === 4) {
            return <WaysToPlayMenu />
        }
        else if (dropDownId === 5) {
            return <MoreMenu />
        }
    })();

    return (
        <nav className={styles.containerNav}>
            <ul>
                {subDropdown.map((sub) => (
                    <li
                        key={sub.id}
                        onClick={() => setDropDownId(sub.id)}
                    >
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

            <div>
                {dropdownMenu}
            </div>

        </nav>
    );
}

export default SubMenu;