import style from './Website.module.scss';

export const Website = () => {
    return (
        <section className={style.Website}>
            <div className={style.Website_title}>An enterprise template to ramp up your company website</div>
            <div className={style.Website_buttonBlock}>
                <button className={style.Website_buttonEmail}>Your email address</button>
                <button className={style.Website_buttonStart}>Start now</button>
            </div>
        </section>
    )
}