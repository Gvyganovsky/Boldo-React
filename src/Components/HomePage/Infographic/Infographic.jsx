import style from './Infographic.module.scss';
import CoolFeaturetitle from '../../../assets/photo/Cool feature title.png';
import EvenCoolerFeature from '../../../assets/photo/Even cooler feature.png';
import CoolTitle from '../../../assets/photo/Cool title.png';
import { ReactComponent as Arrow } from '../../../assets/icons/Arrow.svg';

export const Infographic = () => {
    return (
        <section className={style.Infographic}>
            <div className={style.Infographic_grayText}>Our Services</div>
            <div className={style.Infographic_titleText}>Handshake infographic mass market crowdfunding iteration.</div>

            <div className={style.Infographic_imgBlocks}>
                <div className={style.Infographic_imgBlock}>
                    <img src={CoolFeaturetitle} alt="Cool feature title" />
                    <div className={style.Infographic_title}>Cool feature title</div>
                    <div className={style.Infographic_text}>
                        Learning curve network effects return on investment.
                    </div>
                    <div className={style.arrowBlock}>
                        <div className={style.arrowBlock_text}>Explore page</div>
                        <Arrow />
                    </div>
                </div>

                <div className={style.Infographic_imgBlock}>
                    <img src={EvenCoolerFeature} alt="Even cooler feature" />
                    <div className={style.Infographic_title}>Even cooler feature</div>
                    <div className={style.Infographic_text}>
                        Learning curve network effects return on investment.
                    </div>
                    <div className={style.arrowBlock}>
                        <div className={style.arrowBlock_text}>Explore page</div>
                        <Arrow />
                    </div>
                </div>

                <div className={style.Infographic_imgBlock}>
                    <img src={CoolTitle} alt="Cool Title" />
                    <div className={style.Infographic_title}>Cool feature title</div>
                    <div className={style.Infographic_text}>
                        Learning curve network effects return on investment.
                    </div>
                    <div className={style.arrowBlock}>
                        <div className={style.arrowBlock_text}>Explore page</div>
                        <Arrow />
                    </div>

                </div>
            </div>
        </section>
    )
}