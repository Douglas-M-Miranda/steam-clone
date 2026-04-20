import styles from './storePage.module.scss'

type onselectTip = {
    onSelect: (value: boolean) => void;
}

function StorePage({ onSelect }: onselectTip) {

    const handleClick = (click: boolean) => {
        onSelect(click)
    }

    return (
        <main
            className={styles.containerMainStore}
            onClick={() => handleClick(true)}>

            <section className={styles.mainPromotionalVideo}>
                <video className={styles.homeVideo} autoPlay loop muted playsInline preload='auto' aria-label='Europa Universalis V NOW AVAILABLE'>
                    <source src='https://shared.akamai.steamstatic.com/store_item_assets/steam/clusters/frontpage/655d8f81fb9b674ddf6d6d86/webm_page_bg_english.webm?t=1762196564' type='video/webm' />
                    <source src='https://shared.akamai.steamstatic.com/store_item_assets/steam/clusters/frontpage/655d8f81fb9b674ddf6d6d86/mp4_page_bg_english.mp4?t=1762196564' type='video/mp4' />
                </video>
            </section>
        </main>
    );
}

export default StorePage