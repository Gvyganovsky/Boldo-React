import style from './LatestNews.module.scss';
import { LatestNewsBlock } from './LatestNews_Block';
import LatestNews1 from '../../../assets/photo/LatestNews1.png';
import LatestNews2 from '../../../assets/photo/LatestNews2.png';
import LatestNews3 from '../../../assets/photo/LatestNews3.png';
import LatestNews4 from '../../../assets/photo/LatestNews4.png';
import LatestNews5 from '../../../assets/photo/LatestNews5.png';
import LatestNews6 from '../../../assets/photo/LatestNews6.png';
import ChandlerBing from '../../../assets/photo/Chandler Bing.png';
import RachelGreen from '../../../assets/photo/Rachel Green.png';
import MonicaGeller from '../../../assets/photo/Monica Geller.png';

export const LatestNews = () => {
    return (
        <section className={style.LatestNews}>
            <div className={style.LatestNews_title}>Latest news</div>
            <div className={style.LatestNews_Blocks}>
                <LatestNewsBlock img={LatestNews1} alt='LatestNews1'
                    text='Pitch termsheet backing validation focus release.'
                    imgHuman={ChandlerBing} nameHuman='Chandler Bing' />

                <LatestNewsBlock img={LatestNews2} alt='LatestNews2'
                    text='Seed round direct mailing non-disclosure agreement graphical user interface rockstar.'
                    imgHuman={RachelGreen} nameHuman='Rachel Green' />

                <LatestNewsBlock img={LatestNews3} alt='LatestNews3'
                    text='Beta prototype sales iPad gen-z marketing network effects value proposition.'
                    imgHuman={MonicaGeller} nameHuman='Monica Geller' />

                <LatestNewsBlock img={LatestNews4} alt='LatestNews4'
                    text='Pitch termsheet backing validation focus release.'
                    imgHuman={ChandlerBing} nameHuman='Chandler Bing' />

                <LatestNewsBlock img={LatestNews5} alt='LatestNews5'
                    text='Seed round direct mailing non-disclosure agreement graphical user interface rockstar.'
                    imgHuman={RachelGreen} nameHuman='Rachel Green' />

                <LatestNewsBlock img={LatestNews6} alt='LatestNews6'
                    text='Beta prototype sales iPad gen-z marketing network effects value proposition.'
                    imgHuman={MonicaGeller} nameHuman='Monica Geller' />
            </div>
            <div className={style.LatestNews_buttonBlock}>
                <button className={style.LatestNews_button}>Load more</button>
            </div>
        </section>
    )
}