"use client";
import React, { useState, useEffect, useRef } from "react";
import "swiper/css";
import "swiper/css/pagination";
import TrendVault from "./TrendVault";
import Service from "./ServiceSection";
import Layout from "./NewsletterLayout";
import Footer from "./Footer";
import axios from "axios";
import Topsection from "./Topsection";
import SlideComponent from "./VibeRightNow";

const HomePage = () => {
  const [isTabView, setIsTabView] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState(null);
  const trendVaultRef = useRef(null);   
  const scrollToTrendVault = () => {
    trendVaultRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 765);
      setIsTabView(window.innerWidth <= 1200);
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleResize();
    handleScroll();

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      if (typeof window === "undefined") return;

      const token = localStorage.getItem("token");

      if (!token) {
        console.error("Token not available. You need to sign up to view the page.");
        return;
      }

      try {
        const response = await axios.get(
          "https://vibeontopbackend.onrender.com/api/auth/getuser",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setUser(response.data.user);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="flex flex-col w-screen">
      <Topsection onCategoryClick={scrollToTrendVault} />
      <SlideComponent />
<div ref={trendVaultRef}>
        <TrendVault />
      </div>
      <Service />
      <Layout />
      <Footer />
    </div>
  );
};

export default HomePage;
