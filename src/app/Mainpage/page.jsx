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
import { FaBars } from 'react-icons/fa';
const images = [
{ src: "https://c0.wallpaperflare.com/preview/192/66/526/front-view-of-man-s-face.jpg" },
{ src: "https://images.unsplash.com/photo-1563170446-9c3c0622d8a9?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBvcnRyYWl0JTIwcGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D" },
{ src: "https://img.freepik.com/free-photo/close-up-portrait-young-african-man-with-stubble_171337-1296.jpg" },
{ src: "https://cdn.mos.cms.futurecdn.net/p5quSf4dZXctG9WFepXFdR.jpg" },
];
const HomePage = () => {
const [isTabView, setisTabView] = useState(false);
const [isMobileView, setisMobileView] = useState(false);
const [menuOpen, setMenuOpen] = useState(false);
const [scrolled, setScrolled] = useState(false);
const [imageList, setImageList] = useState(images);
const [currentIndex, setCurrentIndex] = useState(0);
const [user, setUser] = useState(null);


const prevSlide = () => {
setImageList((prev) => [...prev.slice(1), prev[0]]);
};

const nextSlide = () => {
setImageList((prev) => [prev[prev.length - 1], ...prev.slice(0, -1)]);
};

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