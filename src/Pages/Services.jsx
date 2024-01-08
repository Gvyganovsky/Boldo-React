import { Words } from '../Components/Services/Words/Words';
import { LatestNews } from '../Components/Services/LatestNews/LatestNews';
import { Website } from '../Components/LayOut/Website/Website';

function Services() {
    return (
        <section>
            <Words />
            <LatestNews />
            <Website />
        </section>
    );
}

export { Services };