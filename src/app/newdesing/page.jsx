import Navbar from "@/components/NewDesing/Navbar/Navbar";
import "./newdesing.css";
import Home from "@/components/NewDesing/Home/Home";
import Popular from "@/components/NewDesing/Popular/Popular";
import Offers from "@/components/NewDesing/Offers/Offers";
import About from "@/components/NewDesing/About/About";
import Blog from "@/components/NewDesing/Blog/Blog";
import Footer from "@/components/NewDesing/Footer/Footer";

const NewDesing = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Popular />
      <Offers />
      {/* <About />
          <Blog />
          <Footer /> 
      */}
    </>
  );
};
export default NewDesing;
