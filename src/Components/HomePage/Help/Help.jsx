import style from './Help.module.scss';
import help from '../../../assets/photo/Help.png';
import { ReactComponent as Check } from '../../../assets/icons/Check.svg';

export const Help = () => {
    return (
        <section className={style.Help}>
            <img src={help} alt="Help" />
            <div className={style.Help_textBlock}>
                <div className={style.Help_text}>We connect our customers with the best, and help them keep up-and stay open.</div>
                <div className={style.Help_Blocks}>
                    <div className={style.Help_Block}>
                        <div className={style.Help_TextName}>We connect our customers with the best?</div>
                        <Check />
                    </div>
                    <div className={style.Help_Block}>
                        <div className={style.Help_TextName}>Android research & development rockstar?</div>
                        <Check />
                    </div>
                </div>
            </div>
        </section>
    )
}