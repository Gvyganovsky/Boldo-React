import style from './LatestNews.module.scss';

export const LatestNewsBlock = (props) => {
    return (
        <div className={style.LatestNews_Block}>
            <img src={props.img} alt={props.alt} />
            <div className={style.LatestNews_titleBlock}>
                <div className={style.LatestNews_titleText}>Category</div>
                <div className={style.LatestNews_textGrayT}>November 22, 2021</div>
            </div>
            <div className={style.LatestNews_text}>{props.text}</div>
            <div className={style.LatestNews_imgBlock}>
                <img src={props.imgHuman} alt={props.imgHuman} />
                <div className={style.LatestNews_imgText}>{props.nameHuman}</div>
            </div>
        </div>
    )
}