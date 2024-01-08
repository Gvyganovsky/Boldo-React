import style from './Love.module.scss';
import Love1 from '../../../assets/photo/Love1.png';
import Love2 from '../../../assets/photo/Love2.png';
import Love3 from '../../../assets/photo/Love3.png';
import Love4 from '../../../assets/photo/Love4.png';
import Love5 from '../../../assets/photo/Love5.png';

export const Love = () => {
    return (
        <section>
            <div className={style.Love}>
                <div className={style.Love_textGray}>About</div>
                <div className={style.Love_text}>We love to make great things, things that matter.</div>
                <div className={style.Love_Gray}>
                    Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage
                    innovator success deployment non-disclosure.
                </div>
            </div>
            <div className={style.Love_imgBlock}>
                <div className={style.Love_imgBlock_first}>
                    <img src={Love1} alt="Love1" className={style.Love1} />
                    <img src={Love2} alt="Love2" />
                </div>
                <img src={Love3} alt="Love3" className={style.Love3}/>
                <div className={style.Love_imgBlock_first}>
                    <img src={Love4} alt="Love4" className={style.Love4} />
                    <img src={Love5} alt="Love5" />
                </div>
            </div>
        </section>
    )
}