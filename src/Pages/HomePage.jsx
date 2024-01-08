import { Boldo } from '../Components/HomePage/Boldo/Boldo';
import { Infographic } from '../Components/HomePage/Infographic/Infographic';
import { Open } from '../Components/HomePage/Open/Open';
import { Customers } from '../Components/HomePage/Customers/Customers';
import { Enterprise } from '../Components/HomePage/Enterprise/Enterprise';
import { Help } from '../Components/HomePage/Help/Help';
import { Accelerator } from '../Components/HomePage/Accelerator/Accelerator';
import { Website } from '../Components/LayOut/Website/Website';

export const HomePage = () => {
    return (
        <section>
            <Boldo />
            <Infographic />
            <Open />
            <Customers />
            <Enterprise />
            <Help />
            <Accelerator />
            <Website />
        </section>
    )
}