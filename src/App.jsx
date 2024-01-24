import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/navFooter/Navbar";
import Footer from './component/navFooter/Footer';
import Home from './component/Page/Home';
import ServiceSolution from './component/Page/ServiceSolution';
import ServiceSoftware from './component/Page/ServiceSoftware';
import ServiceAutomation from './component/Page/ServiceAutomation';
import About from './component/Page/About';
import Career from './component/Page/Career';
import Blog from './component/Page/Blog';
import Contact from './component/Page/Contact';
import NotFound from './component/Page/NotFound';
import CareerSingle from "./component/Page/CareerSingle";
import WorkTogether from "./component/Page/WorkTogether";
import TopBtn from "./component/utils/TopBtn";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <TopBtn />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicesolution" element={<ServiceSolution />} />
          <Route path="/servicesoftware" element={<ServiceSoftware />} />
          <Route path="/serviceautomation" element={<ServiceAutomation />} />
          <Route path="/about" element={<About />} />
          <Route path="/career" element={<Career />} />
          <Route path="/career/:userId" element={<CareerSingle />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/worktogether" element={<WorkTogether />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
