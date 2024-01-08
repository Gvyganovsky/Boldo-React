import { Love } from '../Components/About/Love/Love';
import { Handshake } from '../Components/About/Handshake/Handshake';
import { Market } from '../Components/About/Market/Market';
import { Leadership } from '../Components/About/Leadership/Leadership';
import { Believe } from '../Components/About/Believe/Believe';
import { Website } from '../Components/LayOut/Website/Website';

export const About = () => {
    return (
        <section>
            <Love />
            <Handshake />
            <Market />
            <Leadership />
            <Believe />
            <Website />
        </section>
    )
}