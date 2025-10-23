import styles from './CategoriesMenu.module.scss'
import { ChevronRight } from 'lucide-react';

function CategoriesMenu() {
    return (
        <nav className={styles.navDropdownCategories}>
            <div className={styles.containerCategoriesGenres}>

                <div className={styles.CategoriesGenresTexts}>

                    <span className={styles.CategoriesGenresText}>
                        Your top genres
                    </span>
                    <span className={styles.CategoriesAllGenresText}>
                        View all genres & themes
                        <ChevronRight />
                    </span>

                </div>

                <div className={styles.containerCategoriesBtnGenres}>

                    <div className={styles.btnGenres}>
                        <img className={styles.btnGenreImage} src="https://store.akamai.steamstatic.com/categories/image/category/scifi?cc=BR&l=english" alt="" />
                        
                        <div className={styles.backgroundFake}></div>

                        <div className={styles.btnGenresInternalConfigurationText}>
                            <span className={styles.btnGenresText}>
                                Sci-Fi & Cyberpunk
                            </span>
                        </div>
                    </div>
                    
                    
                    <div className={styles.btnGenres}>
                        <img className={styles.btnGenreImage} src="https://store.akamai.steamstatic.com/categories/image/category/simulation?cc=BR&l=english" alt="" />
                        
                        <div className={styles.backgroundFake}></div>

                        <div className={styles.btnGenresInternalConfigurationText}>
                            <span className={styles.btnGenresText}>
                                Simulation
                            </span>
                        </div>
                    </div>

                    <div className={styles.btnGenres}>
                        <img className={styles.btnGenreImage} src="https://store.akamai.steamstatic.com/categories/image/category/open_world?cc=BR&l=english" alt="" />
                        
                        <div className={styles.backgroundFake}></div>

                        <div className={styles.btnGenresInternalConfigurationText}>
                            <span className={styles.btnGenresText}>
                                Open world
                            </span>
                        </div>
                    </div>

                    <div className={styles.btnGenres}>
                        <img className={styles.btnGenreImage} src="https://store.akamai.steamstatic.com/categories/image/category/adventure?cc=BR&l=english" alt="" />
                        
                        <div className={styles.backgroundFake}></div>

                        <div className={styles.btnGenresInternalConfigurationText}>
                            <span className={styles.btnGenresText}>
                                Adventure
                            </span>
                        </div>
                    </div>

                    <div className={styles.btnGenres}>
                        <img className={styles.btnGenreImage} src="https://store.akamai.steamstatic.com/categories/image/category/horror?cc=BR&l=english" alt="" />
                        
                        <div className={styles.backgroundFake}></div>

                        <div className={styles.btnGenresInternalConfigurationText}>
                            <span className={styles.btnGenresText}>
                                Horror
                            </span>
                        </div>
                    </div>

                    <div className={styles.btnGenres}>
                        <img className={styles.btnGenreImage} src="https://store.akamai.steamstatic.com/categories/image/category/anime?cc=BR&l=english" alt="" />
                        
                        <div className={styles.backgroundFake}></div>

                        <div className={styles.btnGenresInternalConfigurationText}>
                            <span className={styles.btnGenresText}>
                                Anime
                            </span>
                        </div>
                    </div>

                </div>

            </div>

            <div className={styles.containerCategoriesTags}>
                <div></div>

            </div>
        </nav>
    );
}

export default CategoriesMenu