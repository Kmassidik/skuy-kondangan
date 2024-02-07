import { useEffect } from "react";
import "./mainPage.scss";

const MainPage = () => {
  useEffect(() => {
    let observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          let h1 = entry.target.querySelector("h1");
          if (entry.isIntersecting) {
            h1.classList.add("fadeIn");
          } else {
            h1.classList.remove("fadeIn");
          }
        });
      },
      { threshold: [0.5] }
    );

    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });

    // Remove opacity-0 class from the first section after mount
    document
      .querySelector("section:first-child h1")
      .classList.remove("opacity-0");

    document.querySelectorAll("section").forEach((section) => {
      section.addEventListener("mousemove", function (e) {
        let moveX = (e.pageX * -1) / 60;
        let moveY = (e.pageY * -1) / 60;
        this.style.backgroundPosition = `calc(50% + ${moveX}px) calc(50% + ${moveY}px)`;
      });
    });
  }, []);

  return (
    <>
      <div className='custom-container fade-in'>
        <section className='flex items-center justify-center w-screen h-screen snap-start'>
          <h1 className='text-white font-bold text-6xl uppercase tracking-wider'>
            Vietnam
          </h1>
        </section>
        <section className='flex items-center justify-center w-screen h-screen snap-start bg-gray-800 text-white'>
          <h1 className='opacity-0 text-white font-bold text-6xl uppercase tracking-wider'>
            Travel News
          </h1>
        </section>
        <section className='flex items-center justify-center w-screen h-screen snap-start bg-gray-900 text-white'>
          <h1 className='opacity-0 text-white font-bold text-6xl uppercase tracking-wider'>
            Guide
          </h1>
        </section>
        <section className='flex items-center justify-center w-screen h-screen snap-start bg-gray-100 text-black'>
          <h1 className='opacity-0 text-white font-bold text-6xl uppercase tracking-wider'>
            And Tips
          </h1>
        </section>
      </div>
    </>
  );
};

export default MainPage;
