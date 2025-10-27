import Image from "next/image";
import Navbar from "./_components/Navbar";
import Header from "./_components/Hero/Header";
import About from "./_components/About/About";
import Services from "./_components/Services/Services";
import Portfolio from "./_components/Portfolio/Portfolio";
import Testimonials from "./_components/Testimonials/Testimonials";
import Contact from "./_components/Contact/Contact";

export default function Home() {
  return <> 
  <Header />
  <About />
  <Services />
  <Portfolio />
  <Testimonials />
  <Contact />
  </> 
}
