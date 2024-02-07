import React, { useState } from "react";
import backgroundImage from "../assets/picture_1.jpg";

const FirstPage = ({ onButtonClick }) => {
  const [isFadedIn, setIsFadedIn] = useState(false);

  const handleButtonClick = () => {
    setIsFadedIn(true);
    onButtonClick();
  };

  const heroStyle = {
    minHeight: "100vh",
    backgroundImage: `url(${backgroundImage})`,
    transform: isFadedIn ? "translateY(-100%)" : "translateY(0)",
    transition: "transform 2s ease-in-out",
  };

  return (
    <div className="hero" style={heroStyle}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="md:max-w-6xl px-4 md:px-0 mx-auto">
          <h1 className="mb-5 text-4xl md:text-6xl font-extrabold">
            DICKI & PITTA
          </h1>
          <p className="mb-12 mt-6 text-sm md:text-lg">
            {/* Your existing content */}
            Kepada Bapak/Ibu/Saudara/i yang terhormat, dengan sukacita dan penuh
            rasa hormat, kami mengundang Anda untuk turut serta merayakan
            pernikahan Dicki dan Pitta. Kehadiran Anda akan membuat momen ini
            lebih istimewa. Mohon maaf apabila terdapat kesalahan penulisan nama
            atau gelar.
          </p>
          <button
            className="btn btn-primary text-white mt-8"
            onClick={handleButtonClick}
          >
            {/* Your existing button content */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mr-2 inline-block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"
              />
            </svg>
            Buka Undangan
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
