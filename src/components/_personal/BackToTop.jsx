"use client";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { ArrowBigUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  // Hiển thị nút khi cuộn xuống dưới 300px
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  // Cuộn về đỉnh trang
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <div
      className={`${
        !isVisible ? "hidden" : "fixed"
      }  w-10 h-10 bottom-[100px] right-20`}
      onClick={scrollToTop}>
      <Button className="bg-[#026db5]">
        <ArrowBigUp size={32} color="#Ffffff" />
      </Button>
    </div>
  );
}
