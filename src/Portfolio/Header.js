import React from 'react'
import { useEffect } from "react";
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
    }, []);
    return (
        <div>
            <header className="hm">
                <div className="logo">TEO</div>
                <div className="toggler">T</div>

            </header>
            <div className="side">
                <ul>
                    <li className="nav-item">
                        <a href="https://www.google.com" className="nav-link">
                            HOME
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="https://www.google.com" className="nav-link">
                            ABOUT ME
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="https://www.google.com" className="nav-link">
                            PORTFOLIO
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="https://www.google.com" className="nav-link">
                            SERVICES
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="https://www.google.com" className="nav-link">
                            CONTACT ME
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
