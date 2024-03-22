import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useGSAP } from "@gsap/react";
import { trpc } from "./main";

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
        end: "top 312px",
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
        end: "top 312px",
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
        end: "top 312px",
        toggleActions: "play reverse play reverse",
      },
    });
  });

  // handle submit form
  const handleSubmit = async () => {
    console.log("submit");
    const name = document.getElementById("name")!.innerText;
    const message = document.getElementById("message")!.innerText;
    const contact = document.getElementById("contact")!.innerText;
    const result = await trpc.email.mutate(
      "name:" + name + "\n message" + message + "\n contact" + contact,
    );
    console.log(result);
  };

  return (
    <div className="grid w-screen grid-cols-6 flex-col bg-zinc-50">
      <div className="col-span-4 col-start-2 mt-44 flex h-screen w-full flex-col items-start text-6xl tracking-tighter">
        <div className="text-2xl font-extralight tracking-tighter text-neutral-800">
          hello, im mylo
        </div>
        <div className="mt-24 max-w-[500px] text-2xl font-normal tracking-tighter text-neutral-800">
          a software engineer from bali interested in positively impacting lives
          around him
        </div>
        <div className="mt-32 flex flex-col md:mt-64">
          <a
            className="hoverBold text-black text-opacity-5 transition-all duration-500 hover:text-opacity-100"
            href="/portfolio"
            ref={portfolioRef}
          >
            portfolio
          </a>
          <a
            className="hoverBold text-black text-opacity-5 transition-all duration-500 hover:text-opacity-100"
            href="/about"
            ref={aboutRef}
          >
            about
          </a>
          <a
            className="text-black text-opacity-5 transition-all duration-500 hover:text-opacity-100"
            ref={contactRef}
            href="#contact"
          >
            contact
          </a>
        </div>
      </div>
      <div
        className="col-span-6 col-start-1 mt-24 grid w-full grid-cols-6 items-start bg-neutral-800 text-2xl tracking-tighter text-zinc-50"
        id="contact"
      >
        <div className="col-span-4 col-start-2">
          <div className="mt-56">I'm open to work, shoot a message!</div>
          <div className="mt-16 text-zinc-50">
            my name is
            <span
              className="border-b-2 border-white bg-transparent px-1 pb-1 text-zinc-50"
              id="name"
              contentEditable
            ></span>
            ,<br />
            and I would like to tell you that
            <span
              className="border-b-2 border-white bg-transparent px-1 pb-1 text-zinc-50"
              id="message"
              contentEditable
            ></span>
            . you can contact me on
            <span
              className="text-zing-50 border-b-2 border-white bg-transparent px-1 pb-1"
              id="contact"
              contentEditable
            ></span>
            .
          </div>
          <button
            onClick={() => handleSubmit()}
            className="underline-animation relative mb-56 mt-16 self-end text-right font-bold"
          >
            submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
