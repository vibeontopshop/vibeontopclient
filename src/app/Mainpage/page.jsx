"use client";
import React, { useState, useEffect } from "react";
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
const [isTabView, setisTabView] = useState(false);
const [isMobileView, setisMobileView] = useState(false);
const [scrolled, setScrolled] = useState(false);
const [user, setUser] = useState(null);
useEffect(() => {
const handleResize = () => {
const width = window.innerWidth;
setisMobileView(width <= 765);
setisTabView(width <= 1200);
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
const token = localStorage.getItem('token');

if (!token) {
console.error('Token not available. You need to sign up to view the page.');
return;
}

try {
const response = await axios.get('https://vibeontopbackend.onrender.com/api/auth/getuser', {
headers: { Authorization: `Bearer ${token}` },
});
setUser(response.data.user);
} catch (error) {
console.error('Error fetching user:', error);
}
};

fetchUser();
}, []);
return (
<>
<Topsection/>
<SlideComponent/>
<TrendVault />
<Service />
<Layout />
<Footer /> 
</>
);
};
export default HomePage