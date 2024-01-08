import style from './Leadership.module.scss';
import MichaelScott from '../../../assets/photo/Michael Scott.png';
import DwightSchrute from '../../../assets/photo/Dwight Schrute.png';
import PamBeetsley from '../../../assets/photo/Pam Beetsley.png';

export const Leadership = () => {
    return (
        <section className={style.Leadership}>
            <div className={style.Leadership_textBlock}>
                <div className={style.Leadership_textGray}>Our team</div>
                <div className={style.Leadership_title}>The leadership team</div>
                <div className={style.Leadership_text}>
                    Conversion angel investor entrepreneur first mover advantage. Handshake
                    infographic mass market crowdfunding iteration. Traction stock user
                    experience deployment beta innovator incubator focus.
                </div>
            </div>
            <div className={style.Leadership_blocks}>

                <div className={style.Leadership_block}>
                    <img src={MichaelScott} alt="Michael Scott" />
                    <div className={style.Leadership_titleBlock}>Michael Scott</div>
                    <div className={style.Leadership_titleGray}>General Manager</div>
                </div>

                <div className={style.Leadership_block}>
                    <img src={DwightSchrute} alt="Dwight Schrute" />
                    <div className={style.Leadership_titleBlock}>Michael Scott</div>
                    <div className={style.Leadership_titleGray}>General Manager</div>
                </div>

                <div className={style.Leadership_block}>
                    <img src={PamBeetsley} alt="Pam Beetsley" />
                    <div className={style.Leadership_titleBlock}>Michael Scott</div>
                    <div className={style.Leadership_titleGray}>General Manager</div>
                </div>

            </div>
        </section>
    )
}