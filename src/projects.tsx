// src/Projects.tsx

import React, { useState } from "react";
import Card from "./components/card";
import Button from "./components/button";
import ScrollView from "./components/scrollview";

const data = [
  {
    title: "Project 1",
    description: "This is the first project",
    imageUrl: "test.jpeg",
    linkUrl: "/",
  },
  {
    title: "Project 2",
    description: "This is the second project",
    imageUrl: "test.jpeg",
    linkUrl: "/",
  },
  {
    title: "Project 3",
    description: "This is the third project",
    imageUrl: "test.jpeg",
    linkUrl: "/",
  },
];

const Projects: React.FC = () => {
  return (
    <>
      <div className="flex h-screen flex-col items-center justify-between">
        <div className="grid w-full grid-cols-12  bg-white">
          {/* first part */}
          <>
            <div className="col-span-3 col-start-2 md:col-span-1 md:col-start-2">
              <h1 className="text-2xl">projects</h1>
              <Button label="back" type="secondary" linkTo="/"></Button>
            </div>
            <div className="col-span-5 col-start-7 md:col-span-3 md:col-start-7">
              <div className="flex flex-col gap-16">
                <ScrollView data={data}></ScrollView>
              </div>
            </div>
          </>
        </div>
        <div className="grid w-full grid-cols-12 bg-white pb-24 pt-24">
          {/* second part */}
          <>
            <a
              className="col-span-3 col-start-2 row-start-6 break-words"
              href="/"
            >
              <h1 className="text-2xl leading-6">www.milopadma.com</h1>
            </a>
          </>
        </div>
      </div>
    </>
  );
};

export default Projects;
