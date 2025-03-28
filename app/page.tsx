"use client"
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from './components/Footer'

export default function Home() {
  return (
    <div >
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}
