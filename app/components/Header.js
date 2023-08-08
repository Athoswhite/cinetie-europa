"use client"
import React from "react";
import { useState } from "react";

export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <header class="fixed top-0 w-full clearNav z-50">
      <div
        className={`md:flex md:flex-grow items-center transition-transform ${
          navbarOpen ? "transform translate-y-0" : "transform -translate-y-full"
        } md:translate-y-0 md:space-x-4 text-base font-medium`}
      >
      <div class="max-w-7xl mx-auto flex flex-wrap p-5 flex-col md:flex-row justify-between">
        <div className="flex flex-row items-center p-3 md:p-1">
          <a
            href="/"
            class="flex text-3xl text-red-700 font-medium mb-4 md:mb-0"
          >
            CINETIE
          </a>
          <button
            className="text-white pb-4 cursor-pointer leading-none px-3 py-1 md:hidden outline-none focus:outline-none content-end ml-auto"
            type="button"
            aria-label="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
        <div
          className={
            "md:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
        >
          <nav className="md:ml-auto md:mr-auto md:pl-14 pl-1">
          <div class="md:ml-auto md:mr-auto font-4 pt-1 md:pl-14 pl-1 flex flex-wrap items-center md:text-base text-1xl md:justify-center justify-items-start">
            <a href="#home" class="mr-11 pr-2 cursor-pointer text-gray-300 hover:text-white font-semibold tr04">
              Home
            </a>

            <a href="#about" class="mr-12 md:ml-11 ml-0 cursor-pointer text-gray-300 hover:text-white font-semibold tr04">
              About Us
            </a>
            <a href="#attend" class="mr-5 cursor-pointer text-gray-300 hover:text-white font-semibold tr04">
              Attend
            </a>
            <a href="#contact" class="mr-5 cursor-pointer text-gray-300 hover:text-white font-semibold tr04">
              Contact
            </a>
          </div>
          </nav>
          <div className="md:flex items-center md:pl-4 mt-4 md:mt-0">
          <a
            href="https://twitter.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="invisible md:visible"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="white"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <a
            data-v-54e46119=""
            href="https://facebook.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="pl-7 invisible md:visible"
          >
            <svg
              data-v-54e46119=""
              width="30"
              height="20"
              viewBox="0 0 25 24"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              title="Facebook"
              class="Facebook-link"
            >
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </a>

          <a href="https://tiktok.com/" rel="noopener noreferrer" target="_blank" class="pl-7 invisible md:visible">
  <img src="https://th.bing.com/th/id/R.6d1be50b5afefee4fb715a3d9bf9dbb7?rik=hD4QBFBVvBv6bg&riu=http%3a%2f%2fvideodashboard.io%2fspecial%2fassets%2fimages%2fs18-pic3.png&ehk=ZEX2NUXqk5ZU25k7wRH%2bgNyQaI6KEFXSiGqam%2bxk8Jk%3d&risl=&pid=ImgRaw&r=0" alt="TikTok Logo" class="h-6" />
</a>
</div>
</div>
        </div>
      </div>
    </header>
  );
}