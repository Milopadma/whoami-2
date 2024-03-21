// src/Projects.tsx

import React, { useState } from "react";
import Card from "./components/card";
import Button from "./components/button";
import ScrollView from "./components/scrollview";

const data = [
  {
    title: "Eco-Friendly Housing",
    description:
      "This project focuses on the development of eco-friendly housing solutions that are both sustainable and affordable. By leveraging innovative materials and green technologies, we aim to reduce the carbon footprint associated with residential buildings while providing comfortable living spaces. The project explores the use of solar panels, rainwater harvesting systems, and energy-efficient appliances to create homes that are in harmony with the environment.",
    imageUrl: "eco_friendly_housing.jpeg",
    linkUrl: "eco-friendly-housing",
  },
  {
    title: "Urban Farming Initiative",
    description:
      "The Urban Farming Initiative is designed to transform unused urban spaces into productive farmlands. This project addresses food security and promotes healthy eating by enabling city dwellers to grow their own vegetables and fruits. Through community gardens and rooftop farms, we aim to foster a connection between people and the food they consume, reduce food miles, and create green spaces that contribute to the well-being of urban environments.",
    imageUrl: "urban_farming_initiative.jpeg",
    linkUrl: "urban-farming-initiative",
  },
  {
    title: "Renewable Energy Transition",
    description:
      "This ambitious project aims to accelerate the transition to renewable energy sources in our community. Focusing on solar, wind, and hydro power, we plan to implement a series of initiatives to increase the adoption of clean energy. The project includes the installation of public charging stations for electric vehicles, the integration of smart grids for efficient energy distribution, and educational programs to raise awareness about the benefits of renewable energy.",
    imageUrl: "renewable_energy_transition.jpeg",
    linkUrl: "renewable-energy-transition",
  },
  {
    title: "Digital Literacy Campaign",
    description:
      "The Digital Literacy Campaign is committed to enhancing digital skills across all age groups. With a focus on bridging the digital divide, this project offers workshops and online resources to improve internet navigation, cybersecurity awareness, and the use of digital tools for education and work. By empowering individuals with digital literacy, we aim to open up new opportunities for learning, innovation, and connectivity in an increasingly digital world.",
    imageUrl: "digital_literacy_campaign.jpeg",
    linkUrl: "digital-literacy-campaign",
  },
  {
    title: "Sustainable Transportation Network",
    description:
      "This project envisions a sustainable transportation network that minimizes environmental impact while improving mobility. By expanding bike lanes, enhancing public transportation options, and promoting electric vehicles, we aim to reduce greenhouse gas emissions and congestion in urban areas. The initiative also explores innovative solutions like car-sharing programs and smart traffic management systems to create a more efficient and eco-friendly transportation ecosystem.",
    imageUrl: "sustainable_transportation_network.jpeg",
    linkUrl: "sustainable-transportation-network",
  },
  {
    title: "Community Health Outreach",
    description:
      "The Community Health Outreach project aims to improve public health through preventive care, education, and accessible healthcare services. Targeting underserved populations, the project includes mobile health clinics, vaccination drives, and health workshops. By focusing on preventative measures and early intervention, we hope to build a healthier community with reduced healthcare costs and improved quality of life for all residents.",
    imageUrl: "community_health_outreach.jpeg",
    linkUrl: "community-health-outreach",
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
