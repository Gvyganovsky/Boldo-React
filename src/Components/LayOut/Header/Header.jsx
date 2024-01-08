import style from './Header.module.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../../assets/icons/Logo.svg';

export const Header = () => {
    return (
        <section className={style.Header}>
            <div className={style.header_block}>
                <Link to='./HomePage'><Logo /></Link>
                <nav className={style.header_nav}>
                    <ul className={style.header_nav_flex}>
                        <li><Link to='./HomePage'>HomePage</Link></li>
                        <li><Link to='./Services'>Services</Link></li>
                        <li><Link to='./About'>About</Link></li>
                        <Link to='./RegistrationPage' className={style.Header_button}><button>Log In</button></Link>
                    </ul>
                </nav>
            </div>
        </section>
    )
}