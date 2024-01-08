import style from './Footer.module.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoFooter } from '../../../assets/icons/Logo Footer.svg';

export const Footer = () => {
    return (
        <section className={style.Footer}>
            <div className={style.Footer_content}>
                <div className={style.Footer_logoBlock}>
                    <LogoFooter />
                    <div className={style.Footer_logoText}>
                        Social media validation business model canvas graphical user interface launch party
                        creative facebook iPad twitter.
                    </div>
                    <div className={style.Footer_TextGray}>All rights reserved.</div>
                </div>

                <div className={style.Footer_blocks}>
                    <div className={style.Footer_block}>
                        <div className={style.Footer_title}>Landings</div>
                        <Link to='./HomePage'><div className={style.Footer_text}>Home</div></Link>
                        <Link to='./Services'><div className={style.Footer_text}>Services</div></Link>
                        <Link to='./About'><div className={style.Footer_text}>About</div></Link>
                    </div>

                    <div className={style.Footer_block}>
                        <div className={style.Footer_title}>Company</div>
                        <Link to='./HomePage'><div className={style.Footer_text}>Home</div></Link>
                        <Link to='./Services'><div className={style.Footer_text}>Services</div></Link>
                        <Link to='./About'><div className={style.Footer_text}>About</div></Link>
                    </div>

                    <div className={style.Footer_block}>
                        <div className={style.Footer_title}>Resources</div>
                        <Link to='./HomePage'><div className={style.Footer_text}>Home</div></Link>
                        <Link to='./Services'><div className={style.Footer_text}>Services</div></Link>
                        <Link to='./About'><div className={style.Footer_text}>About</div></Link>
                    </div>
                </div>
            </div>
        </section>
    )
}