import styles from "./BrowseMenu.module.scss"

function BrowseMenu() {
    return(
        <nav className={styles.navDropdownBrowse}>
            <p>Browse Top Destinations</p>

            <div className={styles.btnPrimary}>
                <div className={styles.btnTopSellers}>
                    <div className={styles.topSelerrsText}>
                        <span>Top Sellers</span>
                    </div>

                    <div className={styles.btnTopSellersImages}>
                        {/* Dynamic background with the top-selling games */}
                    </div>
                </div>
                
                <div className={styles.btnDiscounts}>
                    <div className={styles.discountsText}>
                        <span>Discounts & Events</span>
                    </div>

                    <div className={styles.btnDiscountsImages}>
                        {/* Dynamic background with the top-selling games */}
                    </div>
                </div>
            </div>

            <div className={styles.btnSecondary}></div>

            <div className={styles.menuSecondary}>
                <ul>
                    <li>Store Home</li>
                    <li>Steam Charts</li>
                    <li>Upcoming Releases</li>
                    <li>Points Shop</li>
                    <li>Gift Cards</li>
                    <li>News & Updates</li>
                    <li>Preferences</li>
                </ul>
            </div>
        </nav>
    )
}

export default BrowseMenu