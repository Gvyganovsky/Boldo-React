import style from './Words.module.scss';
import words from '../../../assets/photo/Words.png';
import ChandlerBing from '../../../assets/photo/Chandler Bing.png';

export const Words = () => {
    return (
        <section className={style.Words}>
            <div className={style.Words_textGray}>Services</div>
            <div className={style.Words_title}>Thoughts and words</div>
            <div className={style.Words_Block}>
                <img src={words} alt="Words" />
                <div className={style.Words_textBlock}>
                    <div className={style.Words_titleBlock}>
                        <div className={style.Words_titleText}>Category</div>
                        <div className={style.Words_textGrayT}>November 22, 2021</div>
                    </div>
                    <div className={style.Words_text}>Pitch termsheet backing validation focus release.</div>
                    <div className={style.Words_imgBlock}>
                        <img src={ChandlerBing} alt="Chandler Bing" />
                        <div className={style.Words_imgText}>Chandler Bing</div>
                    </div>
                </div>
            </div>
        </section>
    )
}