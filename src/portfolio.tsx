import * as React from "react";
import Menu from "./components/menu";

function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="mx-auto grid w-full grid-cols-6 bg-white px-4 py-20 text-2xl tracking-tighter text-neutral-800">
      <div className="col-span-4 col-start-2">
        <Menu label="portfolio" />
        <Container>
          <Card
            description="the best wood exporter in indonesia"
            image="ss1.png"
            link="https://blirumah-web.vercel.app"
            key={1}
          />
          <Card
            description="the best wood exporter in indonesia"
            image="ss2.png"
            title="asa wood web"
            key={2}
          />
          <Card
            description="the best wood exporter in indonesia"
            image="ss3.png"
            title="asa wood web"
            key={3}
          />
          <Card
            description="the best wood exporter in indonesia"
            image="ss4.png"
            title="asa wood web"
            key={4}
          />
        </Container>
      </div>
    </div>
  );
}

export default Portfolio;

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid gap-6 p-4 sm:grid-cols-1 md:grid-cols-1">
      {children}
    </div>
  );
};

export const Card = ({
  title,
  description,
  link,
  image,
}: {
  title?: string;
  description: string;
  image: string;
  link?: string;
}) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div className="flex w-full flex-col rounded-2xl bg-zinc-50 shadow-lg hover:cursor-pointer hover:brightness-75">
        <img
          loading="lazy"
          src={image}
          className="aspect-[2.4] w-full rounded-2xl object-cover"
        />
      </div>
    </a>
  );
};
