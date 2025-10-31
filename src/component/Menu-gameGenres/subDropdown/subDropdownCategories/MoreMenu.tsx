import style from './MoreMenu.module.scss'
import { ChevronRight } from 'lucide-react';

function MoreMenu() {
    return (
        <nav className={style.navDropdownMore}>

            <div className={style.containerSectionList}>
                <ul>
                    <li>
                        <button className={style.containerSectionListBtn} type='button'>
                            Special Sections
                            <ChevronRight size={12} color='#fff' />
                        </button>
                    </li>

                    <li>View All</li>
                </ul>
            </div>

            <div className={style.containersectionsBtn}>
                <span className={style.sectionBtnText}>
                    Special sections
                </span>

                <div className={style.containerbtn}>
                    <div className={`${style.sectionBtn} ${style.sectionBtn_1}`}>
                        <span className={style.sectionBtnTextDescription}>
                            Demos
                        </span>
                    </div>

                    <div className={`${style.sectionBtn} ${style.sectionBtn_2}`}>
                        <span className={style.sectionBtnTextDescription}>
                            DLC
                        </span>
                    </div>

                    <div className={`${style.sectionBtn} ${style.sectionBtn_3}`}>
                        <span className={style.sectionBtnTextDescription}>
                            Sale Events
                        </span>
                    </div>
                </div>
            </div>

            <div className={style.containerSectionSubList}>
                <div className={style.sectionSubListSoftware}>
                    <ul>
                        <li>Software</li>
                        <li>Soundtrack</li>
                        <li>Early Acess</li>
                        <hr className={style.sectionBar} />
                        <li>For PC Cafés</li>
                        <li>macOS</li>
                        <li>SteamOS + Linux</li>
                    </ul>
                </div>

                <div className={style.sectionSubListEvent}>
                    <ul>
                        <li>Steam Next Fest</li>
                        <li>The Steam Awards</li>
                        <li>Steam Replay</li>
                        <li>Steam Labs</li>
                    </ul>
                </div>
            </div>

        </nav>
    );
}

export default MoreMenu;