import { useEffect, useState } from "react";
import { subDropdown } from "./subDropdown/SubDropdown";
import styles from "./SubMenu.module.scss"
import { ChevronDown, Search } from "lucide-react";
import { AnimatePresence, easeInOut, motion } from "motion/react";

import BrowseMenu from "./subDropdown/subDropdownCategories/BrowseMenu";
import RecommendationsMenu from "./subDropdown/subDropdownCategories/RecommendationsMenu";
import CategoriesMenu from "./subDropdown/subDropdownCategories/CategoriesMenu";
import WaysToPlayMenu from "./subDropdown/subDropdownCategories/WaysToPlayMenu"
import MoreMenu from "./subDropdown/subDropdownCategories/MoreMenu";

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
        <div>
            <nav className={styles.containerNav}>
                <ul className={styles.containerNavMenu}>
                    {subDropdown.map((sub) => (
                        <motion.li
                            key={sub.id}
                            onClick={() => setDropDownId(prev => (prev === sub.id ? null : sub.id))}
                            animate={{
                                color: sub.id === dropDownId ? "#51b6ff" : "#fff",
                            }}
                            transition={{ duration: 0.3, ease: easeInOut }}
                        >
                            <span
                                className={`${styles.NavMenuText} ${sub.id == dropDownId ? 
                                    styles.NavMenuTextDisabled : 
                                    styles.NavMenuTextActivated}`}
                            >
                                {sub.title}
                            </span>
                            <ChevronDown size={16} className={styles.icon} />
                        </motion.li>

                    ))}
                    <form className={styles.containerForm}>
                        <input type="text" className={styles.searchInput} placeholder="Search the store" />
                        <button type="submit" className={styles.btnSubmit}>
                            <Search size={18} color="#fff" className={styles.iconSearch} />
                        </button>
                    </form>
                </ul>
                <AnimatePresence>
                    {dropDownId !== null && (
                        <motion.div className={styles.containerDropDownMenu}
                            key="dropDownId"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                        >
                            {dropdownMenu}
                        </motion.div>

                    )}
                </AnimatePresence>
            </nav>
        </div>
    );
}

export default SubMenu;