import React from "react";
import logo from "../../assets/images/Studyshala.svg"
import Container from "../Container/Container";

const HomeHeroSection = () => {
  return (
    <div className="bg-white">
      <Container>
        <nav className="flex items-center justify-between py-4 w-full">
          {/* Logo */}
         <img src={logo}></img>

          {/* Navigation + Button */}
          <div className="flex items-center space-x-[48px]">
            <div className="flex leading-[16px] items-center space-x-[28px] text-[16px] font-medium text-[#333333]">
              <a href="#" className="hover:text-indigo-600">Institutes</a>
              <a href="#" className="hover:text-indigo-600">About Us</a>
              <a href="#" className="hover:text-indigo-600">Blogs</a>
              <a href="#" className="hover:text-indigo-600">Contact</a>
            </div>
            <button className="bg-[#5E5BFB] leading-[16px] text-white px-[20px] py-[18px] rounded-[8px] text-[18px] font-semibold hover:bg-indigo-700 transition">
              Login or Create account
            </button>
          </div>
        </nav>
        </Container>
      </div>
  );
};

export default HomeHeroSection;
