import * as React from "react";
import Spacing from "./components/spacing";
import { UserForm } from "./components/form";

interface ProjectCardProps {
  imageSrc: string;
  title: string;
  tags: string[];
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imageSrc,
  title,
  tags,
  description,
}) => (
  <div className="mt-6 flex w-full flex-col rounded-2xl bg-zinc-50 pb-12">
    <img
      src={imageSrc}
      alt={title}
      className="aspect-[1.67] w-full max-w-[500px]"
    />
    <h3 className="mt-3 text-2xl font-bold tracking-tighter">{title}</h3>
    <div className="mt-2.5 flex gap-2 whitespace-nowrap pr-20 text-sm tracking-tighter">
      {tags.map((tag) => (
        <div
          key={tag}
          className="justify-center rounded-3xl border border-solid border-black px-2 py-0.5"
        >
          {tag}
        </div>
      ))}
    </div>
    <p className="mt-3 text-base tracking-tighter">{description}</p>
  </div>
);

const projects = [
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/a1bb09e59f25737cd80fd177858c64940ac8d6dfeb771c2f8bce905827fdf10d?apiKey=3b2ae921196341e8b90eea3d3fee0292&",
    title: "asa wood",
    tags: ["website", "nextjs", "tailwind"],
    description:
      "a place for all information regarding the best wood company in indonesia",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/a1bb09e59f25737cd80fd177858c64940ac8d6dfeb771c2f8bce905827fdf10d?apiKey=3b2ae921196341e8b90eea3d3fee0292&",
    title: "asa wood",
    tags: ["website", "nextjs", "tailwind"],
    description:
      "a place for all information regarding the best wood company in indonesia",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/a1bb09e59f25737cd80fd177858c64940ac8d6dfeb771c2f8bce905827fdf10d?apiKey=3b2ae921196341e8b90eea3d3fee0292&",
    title: "asa wood",
    tags: ["website", "nextjs", "tailwind"],
    description:
      "a place for all information regarding the best wood company in indonesia",
  },
];

const MyComponent: React.FC = () => {
  return (
    <div className="mx-auto flex w-full flex-col items-center bg-zinc-50">
      <Spacing sm />
      <header className="flex w-full flex-col self-stretch">
        <div className="flex w-full justify-between gap-5 px-6">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc4866792bc82d410caed8f9453eeab64788522b0a0f96caeda80c0f7fd844f0?apiKey=3b2ae921196341e8b90eea3d3fee0292&"
            alt="Logo"
            className="aspect-[1.59] w-12 shrink-0"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca5317dcf39de767b6fd5c42e2668a4035d790675f65d962384b2f37ae4d0e07?apiKey=3b2ae921196341e8b90eea3d3fee0292&"
            alt="Menu"
            className="aspect-square w-7 shrink-0 self-start"
          />
        </div>
        <Spacing lg />
        <div className="flex w-full flex-col px-20 text-2xl tracking-tighter text-neutral-800 max-sm:px-6">
          <h1 className="max-w-[500px] max-sm:mx-0">hello, im mylo</h1>
          <Spacing md />
          <p className="max-w-[500px]">
            a software engineer from bali interested in positively impacting
            lives around him
          </p>
        </div>
      </header>
      <Spacing xl />
      <h2 className="text-6xl font-bold tracking-tighter text-black text-opacity-10 hover:text-opacity-100">
        about
      </h2>
      <h2 className="text-6xl font-bold tracking-tighter text-black text-opacity-10 hover:text-opacity-100">
        contact
      </h2>
      <Spacing xl />
      <main className="flex w-full flex-col px-20 text-neutral-800 max-sm:px-6">
        <h2 className="text-2xl font-bold tracking-tighter">recent work</h2>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </main>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9037e9a2fcd716a21ed39d8acb33ae89946c7e2aa4ec24a0457209329190b0c2?apiKey=3b2ae921196341e8b90eea3d3fee0292&"
        alt=""
        className="stroke-opacity-30 mt-96 aspect-[0.23] w-6 border-[3px] border-solid border-black border-opacity-30 stroke-black stroke-[3px]"
      />
      <footer className="relative mt-48 flex w-full flex-col self-stretch text-2xl tracking-tighter text-zinc-50">
        <div className="absolute z-10 min-h-[129px] w-full -translate-y-[50%] rounded-full bg-neutral-800" />
        <div className="mt-0 flex w-full flex-col bg-neutral-800 p-20 max-sm:px-6">
          <p className="mt-56">im open to work, shoot a message!</p>
          <UserForm />
        </div>
      </footer>
    </div>
  );
};

export default MyComponent;
