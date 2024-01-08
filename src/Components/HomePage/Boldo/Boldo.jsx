import style from './Boldo.module.scss';
import { ReactComponent as HeroGraphics } from '../../../assets/icons/Hero graphics.svg';
import { ReactComponent as LogoGray } from '../../../assets/icons/Logo Gray.svg';
import { ReactComponent as Presto } from '../../../assets/icons/Presto.svg';

export const Boldo = () => {
    return (
        <section className={style.Header}>
            <div className={style.Header_secondBlock}>
                <div className={style.Boldo}>
                    <div className={style.Boldo_textBlock}>
                        <div className={style.Boldo_title}>
                            Save time by building  fast with Boldo Template
                        </div>
                        <div className={style.Boldo_text}>
                            Funding handshake buyer business-to-business metrics iPad partnership.
                            First mover advantage innovator success deployment non-disclosure.
                        </div>
                    </div>
                    <div className={style.Boldo_buttonBlock}>
                        <button className={style.Boldo_button_Buy}>Buy template</button>
                        <button className={style.Boldo_button_Explore}>Explore</button>
                    </div>
                </div>
                <HeroGraphics className={style.Boldo_img} />
            </div>
            <div className={style.Header_logosBlock}>
                <LogoGray className={style.Header_logos} />
                <Presto className={style.Header_logos} />
                <LogoGray className={style.Header_logos} />
                <Presto className={style.Header_logos} />
            </div>
        </section>
    )
}