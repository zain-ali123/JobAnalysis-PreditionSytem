import React from "react";
import Nav from "../components/Nav";
import ShowCase from "../components/showCase";
import JobSeekers from "../components/seekers";
import BSgradient from "../components/BSgradient";
import Footer from "../components/Footer";
import JobL from '../components/JobL'
import NavBar from "../components/Navbar";
export default function landingPage() {
  return (
    <div>
      <NavBar />
      <ShowCase />
      {/* <ServicesSection/> */}
      {/* <JobSeekers />
      <JobL/>
      <BSgradient /> */}
      <Footer />
    </div>
  );
}
