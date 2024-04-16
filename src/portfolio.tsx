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
            image="https://via.placeholder.com/500x256"
            title="asa wood web"
            key={1}
          />
          <Card
            description="the best wood exporter in indonesia"
            image="https://via.placeholder.com/500x256"
            title="asa wood web"
            key={2}
          />
          <Card
            description="the best wood exporter in indonesia"
            image="https://via.placeholder.com/500x256"
            title="asa wood web"
            key={3}
          />
        </Container>
      </div>
    </div>
  );
}

export default Portfolio;

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mt-12 grid gap-6 sm:grid-cols-1 md:grid-cols-1">
      {children}
    </div>
  );
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
    <div className="mt-12 flex w-full flex-col rounded-2xl bg-zinc-50 pb-16 drop-shadow-xl">
      <img
        loading="lazy"
        src={image}
        className="aspect-[2.4] w-full rounded-t-2xl"
      />
      {/* <div className="mt-8 grid grid-cols-2 px-4 md:px-16">
        <div className="col-start-1">
          <div className="text-4xl font-bold">{title}</div>
          <div className="mt-2.5 text-2xl tracking-tighter">see it</div>
        </div>
        <div className="col-start-2">
          <div className="mt-4 text-xl">{description}</div>
        </div>
      </div> */}
    </div>
  );
};
