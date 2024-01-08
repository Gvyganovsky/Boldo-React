import { Outlet } from 'react-router-dom';
import { Header } from '../Components/LayOut/Header/Header';
import { Footer } from '../Components/LayOut/Footer/Footer';

function Layout() {
    return (
        <section>
            <Header />
            <Outlet />
            <Footer />
        </section>
    );
}

export { Layout };