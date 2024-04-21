import * as React from "react";
import Menu from "./components/menu";
import Spacing from "./components/spacing";

function About() {
  return (
    <div className="mx-auto grid w-full grid-cols-6 bg-zinc-50 px-4 py-20 text-2xl tracking-tighter text-neutral-800">
      <div className="col-span-4 col-start-2">
        <Menu label="about" />
        <div className="mt-12">
          <div className="mt-8">
            <p className="max-w-[500px]">21 years old, balinese-indonesian.</p>
            <Spacing sm />
            <p className="max-w-[500px]">
              started webdev in 2022, but always loved game modding and
              customizing minecraft mods ever since i was gifted a laptop in
              2014.
            </p>
            <Spacing sm />
            <p className="max-w-[500px]">
              now studying for an information systems degree in bali.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

export const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="mt-12 grid grid-cols-2 gap-6">{children}</div>;
};

export const Card = ({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) => {
  return (
    <div className="mt-12 flex max-w-[400px] flex-col rounded-2xl bg-zinc-50 pb-16 drop-shadow-xl">
      <img
        loading="lazy"
        src={image}
        className="aspect-[1.72] w-full max-w-[500px] rounded-t-2xl"
      />
      <div className="mt-8 flex flex-col px-16">
        <div className="font-bold">{title}</div>
        <div className="mt-2.5 text-base tracking-tighter">website</div>
        <div className="mt-4">{description}</div>
      </div>
    </div>
  );
};
