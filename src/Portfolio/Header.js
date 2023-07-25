import React from 'react'
import { useEffect} from "react";
import "../Portfolio/Header.css"

export default function Header() {
    useEffect(() => {
        const toggler = document.querySelector(".toggler");
        const side = document.querySelector(".side");
    
        const togglerFunction = () => {
          toggler.classList.toggle("active");
          side.classList.toggle("active");
        };
        toggler.addEventListener("click", togglerFunction);
        return () => {
          toggler.removeEventListener("click", togglerFunction);
        };
      }, []);
  return (
    <div>
      <header className="hm">
        <div className="logo">TEO</div>
        <div className="toggler">T</div>
        </header>
    </div>
  )
}
