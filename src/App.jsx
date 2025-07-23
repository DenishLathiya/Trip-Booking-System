import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Tours from "./Pages/Tours";
import Gallery from "./Pages/Gallery";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";
import Booking from "./Pages/Booking";
import ScrollToTop from "react-scroll-to-top";
import Login from "./Pages/login";
import SignupForm from "./Pages/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: "/tours",
    element: (
      <>
        <Navbar />
        <Tours />
        <Footer />
      </>
    ),
  },
  {
    path: "/gallery",
    element: (
      <>
        <Navbar />
        <Gallery />
        <Footer />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Navbar />
        <About />
        <Footer />
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <Navbar />
        <Contact />
        <Footer />
      </>
    ),
  },
  {
    path: "/booking",
    element: (
      <>
        <Navbar />
        <Booking />
        <Footer />
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <Login />
      </>
    ),
  },
  {
    path: "/Signup",
    element: (
      <>
        <SignupForm />
      </>
    ),
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <ScrollToTop
        color="white"
        smooth
        style={{
          backgroundColor: "#60B5FF",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      />
    </>
  );
};

export default App;
