import { useRef, useEffect } from "react";
import Header from "./components/Header";
import OurStories from "./components/OurStories";
import locomotiveScroll from "locomotive-scroll";
import Places from "./components/Places";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  
const ref = useRef(null);

useEffect(() => {
  if(ref) {
    new locomotiveScroll({
      el: ref.current,
      smooth:true,
      lerp: .015,
      mobile: {
        breakpoint: 0, 
        smooth: true,
        lerp: 1,
    },
    tablet: {
      breakpoint: 0, 
        smooth: true,
        lerp: 1,
    }
      
    })
  }
})

  return (
    <div data-load-container>
    <div ref={ref} data-module-scroll="main" data-scroll-container>
      <Header />
       <OurStories />
      <Places />
      <About />
      <Contact />
      <Footer />
    </div>
    </div>
  );
}

export default App;
