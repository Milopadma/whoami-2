import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const portfolioRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  useGSAP(() => {
    gsap.to(portfolioRef.current, {
      color: "black",
      textShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
      duration: 0.001,
      scrollTrigger: {
        trigger: portfolioRef.current,
        start: "top center",
        end: "top 250px",
        toggleActions: "play reverse play reverse",
      },
    });
    gsap.to(aboutRef.current, {
      color: "black",
      textShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
      duration: 0.001,
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top center",
        end: "top 250px",
        toggleActions: "play reverse play reverse",
      },
    });
    gsap.to(contactRef.current, {
      color: "black",
      textShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
      duration: 0.001,
      scrollTrigger: {
        trigger: contactRef.current,
        start: "top center",
        end: "top 250px",
        toggleActions: "play reverse play reverse",
      },
    });
  });

  return (
    <div className="grid w-screen grid-cols-6 flex-col bg-zinc-50">
      <div className="col-span-4 col-start-2 mt-44 flex w-full flex-col items-start text-6xl tracking-tighter">
        <div className="text-2xl font-extralight tracking-tighter text-neutral-800">
          hello, im mylo
        </div>
        <div className="mt-24 text-2xl font-normal tracking-tighter text-neutral-800">
          a software engineer from bali interested in positively impacting lives
          around him
        </div>
        <div className="mt-32">
          <a
            className="hoverBold text-black text-opacity-5 transition-all duration-500 hover:text-opacity-100"
            href="/portfolio"
            ref={portfolioRef}
          >
            portfolio
          </a>
          <div
            className="hoverBold text-black text-opacity-5 transition-all duration-500 hover:text-opacity-100"
            ref={aboutRef}
          >
            about
          </div>
          <div
            className="text-black text-opacity-5 transition-all duration-500 hover:text-opacity-100"
            ref={contactRef}
          >
            contact
          </div>
        </div>
      </div>
      <div className="col-span-6 col-start-1 mt-24 flex w-full flex-col items-center bg-neutral-800 p-20 text-2xl tracking-tighter text-zinc-50">
        <div className="mt-56">im open to work, shoot a message!</div>
        <div className="mt-16 text-zinc-50">
          my name is
          <span className="text-zinc-50 text-opacity-15"> john doe</span>,<br />
          and i would like to tell you that
          <span className="text-zinc-50 text-opacity-15">
            i want to know how much do you charge
          </span>
          .
        </div>
        <div className="mb-56 mt-16 self-end text-right font-bold">submit</div>
      </div>
    </div>
  );
}

export default App;
