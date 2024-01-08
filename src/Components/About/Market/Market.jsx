import style from './Market.module.scss';

export const Market = () => {
    return (
        <section className={style.Market}>
            <div className={style.Market_textGray}>Our numbers</div>
            <div className={style.Market_text}>Handshake infographic mass market crowdfunding iteration.</div>
            <div className={style.Market_BlueBlocks}>
                <div className={style.Market_BlueBlock}>
                    <div className={style.Market_BlueNum}>120m</div>
                    <div className={style.Market_BlueText}>Cool feature title</div>
                </div>
                <div className={style.Market_BlueBlock}>
                    <div className={style.Market_BlueNum}>10.000</div>
                    <div className={style.Market_BlueText}>Cool feature title</div>
                </div>
                <div className={style.Market_BlueBlock}>
                    <div className={style.Market_BlueNum}>240</div>
                    <div className={style.Market_BlueText}>Cool feature title</div>
                </div>
            </div>
        </section>
    )
}