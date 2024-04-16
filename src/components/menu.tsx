import React from "react";
import Separator from "./separator";

interface MenuProps {
  label: string;
}

const Menu: React.FC<MenuProps> = ({ label }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // listen for esc keypress
  React.useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <div className="col-span-4 col-start-2">
      <div className="flex w-auto justify-between gap-5 self-stretch whitespace-nowrap">
        <div>{label}</div>
        <div onClick={toggleMenu}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c9ee0f7d2ed184709ca3ade9cc59782f8d25ff939d7d037f7787cc16328dfd9?"
            className="aspect-square w-7 shrink-0"
          />
        </div>
      </div>
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 grid grid-cols-6 bg-zinc-900">
          <div className="col-span-4 col-start-2">
            <ul className="flex flex-col items-end text-6xl font-extrabold tracking-tighter text-white md:text-9xl">
              <Separator size="large" />
              <div
                onClick={toggleMenu}
                className="underline-animation max-w-max text-2xl tracking-normal"
              >
                close
              </div>
              <Separator size="medium" />
              <a href="/" className="underline-animation max-w-max">
                home
              </a>
              <a href="/about" className="underline-animation max-w-max">
                about
              </a>
              <a href="/portfolio" className="underline-animation max-w-max">
                portfolio
              </a>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
