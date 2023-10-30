import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="flex px-4 border-b md:shadow-lg items-center relative">
      <div className="text-lg font-bold md:py-0 py-4">LegalLLM</div>
      <ul className="md:px-2 ml-auto md:flex md:space-x-2 absolute md:relative top-full left-0 right-0">
        <NavLink to={"/"}>
          <li>
            <a href="#" className="flex md:inline-flex p-4 items-center hover-bg-gray-50">
              <span>Home</span>
            </a>
          </li>
        </NavLink>
        
        
        <NavLink to={"/about"}>
          <li>
            <a href="#" className="flex md:inline-flex p-4 items-center hover-bg-gray-50">
              <span>ChatBot</span>
            </a>
          </li>
        </NavLink>
        <NavLink to={"/services"}>
          <li>
            <a href="#" className="flex md:inline-flex p-4 items-center hover-bg-gray-50">
              <span>Document Simplification</span>
            </a>
          </li>
        </NavLink>
        <li>
          <a href="https://huggingface.co/spaces/Hetan07/trial" className="flex md:inline-flex p-4 items-center hover-bg-gray-50" target="_blank" rel="noopener noreferrer">
            <span>Case Prediction</span>
          </a>
        </li>
        <NavLink to={"/contact"}>
          <li>
            <a href="#" className="flex md:inline-flex p-4 items-center hover-bg-gray-50">
              <span>Contact US</span>
            </a>
          </li>
        </NavLink>
      </ul>
      <div className="ml-auto md:hidden text-gray-500 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
        </svg>
      </div>
    </nav>
  );
}

export default Navbar;

