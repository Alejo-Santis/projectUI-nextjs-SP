import Navbar from "@/components/NewDesign/Navbar/Navbar";
import "./newdesign.css";
import Home from "@/components/NewDesign/Home/Home";
import Popular from "@/components/NewDesign/Popular/Popular";
import Offers from "@/components/NewDesign/Offers/Offers";
import About from "@/components/NewDesign/About/About";
import Blog from "@/components/NewDesign/Blog/Blog";
import Footer from "@/components/NewDesign/Footer/Footer";

const NewDesign = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Popular />
      <Offers />
      <About />
      <Blog />
      <Footer />
    </>
  );
};
export default NewDesign;
