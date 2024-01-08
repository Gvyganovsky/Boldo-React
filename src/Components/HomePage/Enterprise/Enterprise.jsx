import style from './Enterpris.module.scss';
import AlbusDumbledore from '../../../assets/photo/Albus Dumbledore.png';
import SeverusSnape from '../../../assets/photo/Severus Snape.png';
import HarryPotter from '../../../assets/photo/Harry Potter.png';

export const Enterprise = () => {
    return (
        <section className={style.Template}>
            <div className={style.Template_title}>An enterprise template to ramp up your company website</div>
            <div className={style.Template_content}>
                <div className={style.Template_block}>
                    <div className={style.Template_text}>“Buyer buzz partner network disruptive non-disclosure agreement business”</div>
                    <div className={style.Template_imgBlock}>
                        <img src={AlbusDumbledore} alt="Albus Dumbledore" />
                        <div className={style.Template_imgTextBlock}>
                            <div className={style.Template_name}>Albus Dumbledore</div>
                            <div className={style.Template_profession}>Manager @ Howarts</div>
                        </div>
                    </div>
                </div>

                <div className={style.Template_block}>
                    <div className={style.Template_text}>“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”</div>
                    <div className={style.Template_imgBlock}>
                        <img src={SeverusSnape} alt="Severus Snape" />
                        <div className={style.Template_imgTextBlock}>
                            <div className={style.Template_name}>Severus Snape</div>
                            <div className={style.Template_profession}>Manager @ Slytherin</div>
                        </div>
                    </div>
                </div>

                <div className={style.Template_block}>
                    <div className={style.Template_text}>“Release facebook responsive web design business model canvas seed money monetization.”</div>
                    <div className={style.Template_imgBlock}>
                        <img src={HarryPotter} alt="Harry Potter" />
                        <div className={style.Template_imgTextBlock}>
                            <div className={style.Template_name}>Harry Potter</div>
                            <div className={style.Template_profession}>Team Leader @ Gryffindor</div>
                        </div>
                    </div>
                </div>

            </div>




        </section>
    )
}