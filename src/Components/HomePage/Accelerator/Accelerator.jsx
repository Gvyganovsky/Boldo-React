import style from './Accelerator.module.scss';
import Accelerator1 from '../../../assets/photo/Accelerator1.png';
import Accelerator2 from '../../../assets/photo/Accelerator2.png';
import Accelerator3 from '../../../assets/photo/Accelerator3.png';
import ChandlerBing from '../../../assets/photo/Chandler Bing.png';
import RachelGreen from '../../../assets/photo/Rachel Green.png';
import MonicaGeller from '../../../assets/photo/Monica Geller.png';

export const Accelerator = () => {
    return (
        <section className={style.Accelerator}>
            <div className={style.Accelerator_grayText}>Our Blog</div>
            <div className={style.Accelerator_titleText}>Value proposition accelerator product management venture</div>
            <div className={style.Accelerator_content}>
                <div className={style.Accelerator_block}>
                    <img src={Accelerator1} alt="Accelerator1" />
                    <div className={style.Accelerator_titleBlock}>
                        <div className={style.Accelerator_title}>Category</div>
                        <div className={style.Accelerator_textGray}>November 22, 2021</div>
                    </div>
                    <div className={style.Accelerator_text}>Pitch termsheet backing validation focus release.</div>
                    <div className={style.Accelerator_imgBlock}>
                        <img src={ChandlerBing} alt="Chandler Bing" />
                        <div className={style.Accelerator_imgText}>Chandler Bing</div>
                    </div>
                </div>

                <div className={style.Accelerator_block}>
                    <img src={Accelerator2} alt="Accelerator2" />
                    <div className={style.Accelerator_titleBlock}>
                        <div className={style.Accelerator_title}>Category</div>
                        <div className={style.Accelerator_textGray}>November 22, 2021</div>
                    </div>
                    <div className={style.Accelerator_text}>Seed round direct mailing non-disclosure agreement graphical user interface rockstar.</div>
                    <div className={style.Accelerator_imgBlock}>
                        <img src={RachelGreen} alt="Rachel Green" />
                        <div className={style.Accelerator_imgText}>Chandler Bing</div>
                    </div>
                </div>

                <div className={style.Accelerator_block}>
                    <img src={Accelerator3} alt="Accelerator3" />
                    <div className={style.Accelerator_titleBlock}>
                        <div className={style.Accelerator_title}>Category</div>
                        <div className={style.Accelerator_textGray}>November 22, 2021</div>
                    </div>
                    <div className={style.Accelerator_text}>Beta prototype sales iPad gen-z marketing network effects value proposition</div>
                    <div className={style.Accelerator_imgBlock}>
                        <img src={MonicaGeller} alt="Monica Geller" />
                        <div className={style.Accelerator_imgText}>Chandler Bing</div>
                    </div>
                </div>
            </div>
            <div className={style.Accelerator_buttonBlock}>
                <button className={style.Accelerator_button}>Load more</button>
            </div>
        </section>
    )
}