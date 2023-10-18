import NavBar from './navBar/NavBar';
import Footer from './footer/Footer';
import ScrollToTop from './scrollToTop/ScrollToTop';
import Preloader from './preloader/Preloader';
import CreateTeamModal from './createTeam/CreateTeamModal';
// import FavoriteModal from './category/FavoriteModal';
// import CategoryModal from './category/CategoryModal';
// import ProductModal from './product/ProductModal';

const Layout = ({ children }) => {
    return (
        <>
            <NavBar />
            <div className="mainContainer">{children}</div>
            <Footer />

            {/* Scroll To Top */}
            <ScrollToTop />
            {/* Pre Loader */}
            <Preloader />

            <CreateTeamModal />
        </>
    );
};

export default Layout;
