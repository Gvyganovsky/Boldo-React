import style from './Believe.module.scss';
import WeAreCommited from '../../../assets/photo/We are commited.png';
import WeAreResponsible from '../../../assets/photo/We are responsible.png';
import WeAimForProgress from '../../../assets/photo/We aim for progress.png';

export const Believe = () => {
    return (
        <section className={style.Believe}>
            <div className={style.Believe_content}>
                <div className={style.Believe_textWhite}>Our values</div>
                <div className={style.Believe_title}>Things in we believe</div>
                <div className={style.Believe_text}>
                    Conversion angel investor entrepreneur first mover advantage. Handshake
                    infographic mass market crowdfunding iteration. Traction stock user
                    experience deployment beta innovator incubator focus.
                </div>
            </div>

            <div className={style.Believe_imgBlocks}>
                <div className={style.Believe_imgBlock}>
                    <img src={WeAreCommited} alt="We Are Commited" />
                    <div className={style.Believe_TextBlock}>
                        <div className={style.Believe_textTitle}>We are commited.</div>
                        <div className={style.Believe_textInfo}>
                            Conversion angel investor entrepreneur first mover advantage. Handshake infographic
                            mass market crowdfunding iteration.
                        </div>
                    </div>
                </div>

                <div className={style.Believe_imgBlock}>
                    <img src={WeAreResponsible} alt="We Are Responsible" />
                    <div className={style.Believe_TextBlock}>
                        <div className={style.Believe_textTitle}>We are responsible.</div>
                        <div className={style.Believe_textInfo}>
                            Conversion angel investor entrepreneur first mover advantage. Handshake infographic
                            mass market crowdfunding iteration.
                        </div>
                    </div>
                </div>

                <div className={style.Believe_imgBlock}>
                    <img src={WeAimForProgress} alt="We Aim For Progress" />
                    <div className={style.Believe_TextBlock}>
                        <div className={style.Believe_textTitle}>We aim for progress.</div>
                        <div className={style.Believe_textInfo}>
                            Conversion angel investor entrepreneur first mover advantage. Handshake infographic
                            mass market crowdfunding iteration.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}