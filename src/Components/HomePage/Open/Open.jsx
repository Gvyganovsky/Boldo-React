import style from './Open.module.scss';
import open from '../../../assets/photo/Open.png';
import { ReactComponent as Сheckmark } from '../../../assets/icons/Сheckmark.svg';

export const Open = () => {
    return (
        <section className={style.Open}>
            <div className={style.open_content}>
                <img src={open} alt="Open" className={style.Open_img} />
                <div className={style.Open_textBlock}>
                    <div className={style.Open_title}>We connect our customers with the best, and help them keep up-and stay open.</div>
                    <div className={style.Open_block}>
                        <Сheckmark />
                        <div className={style.Open_text}>We connect our customers with the best.</div>
                    </div>
                    <div className={style.Open_block}>
                        <Сheckmark />
                        <div className={style.Open_text}>Advisor success customer launch party.</div>
                    </div>
                    <div className={style.Open_block}>
                        <Сheckmark />
                        <div className={style.Open_text}>Business-to-consumer long tail.</div>
                    </div>
                    <button className={style.Open_button}>Start now</button>
                </div>
            </div>
        </section>
    )
}