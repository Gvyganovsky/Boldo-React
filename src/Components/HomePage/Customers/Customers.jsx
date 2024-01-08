import style from './Customers.module.scss';
import customers from '../../../assets/photo/Customers.png';
import { ReactComponent as Leaf } from '../../../assets/icons/Leaf.svg';
import { ReactComponent as Eye } from '../../../assets/icons/Eye.svg';
import { ReactComponent as Sun } from '../../../assets/icons/Sun.svg';

export const Customers = () => {
    return (
        <section className={style.Customers}>
            <div className={style.Customers_content}>
                <img src={customers} alt="Customers" className={style.Customers_img} />
                <div className={style.Customers_textBlock}>
                    <div className={style.Customers_title}>We connect our customers with the best, and help them keep up-and stay open.</div>
                    <div className={style.Customers_block_first}>
                        <Leaf />
                        <div className={style.Customers_text_first}>We connect our customers with the best.</div>
                    </div>
                    <div className={style.Customers_block}>
                        <Eye />
                        <div className={style.Customers_text}>Advisor success customer launch party.</div>
                    </div>
                    <div className={style.Customers_block}>
                        <Sun />
                        <div className={style.Customers_text}>Business-to-consumer long tail.</div>
                    </div>
                </div>
            </div>
        </section>
    )
}