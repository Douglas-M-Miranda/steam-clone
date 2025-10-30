import styles from './WaysToPlayMenu.module.scss';
import { BtnWaysToPlayShape } from '../../../../hooks/data/BtnWaysToPlayShape';

function WaysToPlayMenu() {
    return (
        <nav className={styles.navDropdownWaysToPlay}>
            <span className={styles.dropdownWaysToPlayText}>
                Ways to play games
            </span>

            <div className={styles.containerListWaysToPlay}>

                <div className={styles.containerBtnWaysToPlay}>
                    {BtnWaysToPlayShape.map((game) => (
                        <div key={game.id} className={[styles.btnWayToPlay, styles[game.classname]]
                            .filter(Boolean)
                            .join(' ')}
                        >
                            <span className={styles.btnWarToPlayImage}>
                                <img src={game.image} alt={game.alt} />
                            </span>
                            
                            <span className={styles.btnWayToPlayText}>
                                {game.title}
                            </span>

                        </div>
                    ))}
                </div>

                <div className={styles.containerListOnlinePlay}>

                </div>
            </div>

            <div className={styles.containerWaysToPlaySubMenu}>
                <ul>
                    <li>Local Area Network</li>
                    <li>Local Multiplayer & Party</li>
                    <li>Massively Multiplayer</li>
                    <li>Multiplayer</li>
                    <li>Online Competitive</li>
                    <li>Singleplayer</li>
                </ul>
            </div>
        </nav>
    );
}

export default WaysToPlayMenu;
