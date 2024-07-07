import "./App.css";
import CustomCarousel from "./Crousel";
import NexcentNavBar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CustomCarousel.css";
import ClientShowcase from "./ClientShowCase";
import MembershipSection from "./MembershipSection";
import PixelgradeSection from "./PixelGradeSection";
import BusinessImpactSection from "./BusinessImpactSection";
import FooterDesign from "./DesignFooter";
import TestimonialComponent from "./TestimonialComponent";
import BlogComponent from "./BlogComponent";
import CallForDemo from "./CallForDemo";
import Footer from "./Footer";
function App() {
    return (
        <div className="App">
            <NexcentNavBar />
            <CustomCarousel />
            <ClientShowcase />
            <MembershipSection />
            <PixelgradeSection />
            <BusinessImpactSection />
            <FooterDesign />
            <TestimonialComponent />
            <BlogComponent />
            <CallForDemo />
            <Footer />
        </div>
    );
}

export default App;
