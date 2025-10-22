import styles from './RecommendationsMenu.module.scss'
import { ArrowRight } from 'lucide-react';
import { topGames } from '../../../../hooks/data/TopGames';

function RecommendationsMenu() {
    return (
        <nav className={styles.navDropdownRecommendation}>
            <p>Top Sellers</p>

            <div className={styles.containerMenuRecommendation}>

                <div className={styles.containerMenuRecommendationTopSellers}>
                    
                    {topGames.map((game) => (
                        <div className={styles.btnTopSellersRecommendations}>

                            <div className={styles.btnTopSellersRecommendationsImage}>
                                <img src={game.image} alt={`image from the game ${game.name}`} />
                            </div>

                            <div className={styles.btnTopSellersRecommendationsDescription}>
                                <span className={styles.RecommendationsTittleGame}>
                                    {game.name}
                                </span>
                                <span className={styles.RecommendationsPriceGame}>
                                    {game.isFree === true ? "Free" : "$"+game.price}
                                </span>
                            </div>

                        </div>
                    ))}

                </div>

                <div className={styles.ContainerMyQueue}>

                    <div className={styles.btnContainerMyQueue}>
                        
                        <span className={styles.myQueueTitle}>
                            Your Discovery Queue
                        </span>
                        
                        <span className={styles.myQueuetext}>
                            Let Steam create a custom set of games recommended for you
                        </span>

                        <button className={styles.myQueuetextbtn} type="button">
                            <span>Explore My Queue</span>
                            <ArrowRight className={styles.arrowQueue} color='#FFF' />
                        </button>

                    </div>

                </div>

                <div className={styles.containerRecommendationSubMenu}>
                    <ul>
                        <li>New Releases Queue</li>
                        <li>Community Recommendations</li>
                        <li>Interactive Recommender</li>
                        <li>Popular Among Friends</li>
                        <li>Steam Curators</li>
                        <li>DLC For You</li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default RecommendationsMenu