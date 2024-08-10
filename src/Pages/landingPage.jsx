import React from "react";
import ShowCase from "../components/showCase";
import JobSeekers from "../components/Seekers";
import BSgradient from "../components/BSgradient";
import Footer from "../components/Footer";
import JobL from '../components/JobL'
import NavBar from "../components/Navbar";
export default function landingPage() {
  return (
    <div>
      <NavBar />
      <ShowCase />
      <BSgradient />
      <Footer />
    </div>
  );
}
