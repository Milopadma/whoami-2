import * as React from "react";

function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="mx-auto grid w-full grid-cols-6 bg-white px-4 py-20 text-2xl tracking-tighter text-neutral-800">
      <div className="col-span-4 col-start-2">
        <div className="flex w-auto justify-between gap-5 self-stretch whitespace-nowrap">
          <div>projects</div>
          <div onClick={toggleMenu}>
            {/* Render the hamburger icon */}
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c9ee0f7d2ed184709ca3ade9cc59782f8d25ff939d7d037f7787cc16328dfd9?"
              className="aspect-square w-7 shrink-0"
            />
          </div>
        </div>
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
      {/* Render the menu when isMenuOpen is true */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 grid grid-cols-6 bg-black">
          <div className="menu col-span-4 col-start-2 flex items-center">
            {/* Add your menu items here */}
            <ul className="text-6xl font-extrabold tracking-tighter text-white md:text-9xl">
              <a href="/about" className="underline-animation">
                about
              </a>
              <a href="/portfolio" className="underline-animation">
                portfolio
              </a>
              <a href="/" className="underline-animation">
                home
              </a>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Portfolio;

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mt-12 grid gap-6 sm:grid-cols-1 md:grid-cols-2">
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
    <div className="mt-12 flex max-w-[400px] flex-col rounded-2xl bg-zinc-50 pb-16 drop-shadow-xl">
      <img
        loading="lazy"
        src={image}
        className="aspect-[1.72] w-full max-w-[500px] rounded-t-2xl"
      />
      <div className="mt-8 flex flex-col px-4 md:px-16">
        <div className="font-bold">{title}</div>
        <div className="mt-2.5 text-base tracking-tighter">website</div>
        <div className="mt-4">{description}</div>
      </div>
    </div>
  );
};
