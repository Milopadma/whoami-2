function App() {
  return (
    <div className="flex h-screen flex-col items-center justify-between">
      <div className="pt-medium grid grid-cols-12 bg-white">
        <div className="col-span-3 col-start-2">
          <h1 className="text-2xl">hello</h1>
        </div>
        <div className="col-span-3 col-start-7">
          <h1 className="text-2xl">
            a software engineer from bali interested in impacting lives around
            him
          </h1>
        </div>
        <Separator size="xxlarge" />
        <div className="col-span-3 col-start-2">
          <h1 className="text-2xl">www.milopadma.com</h1>
        </div>
        <div className="col-span-3 col-start-7">
          <h1 className="text-2xl">
            <a href="/projects" className="animate-underline">
              view my projects here
            </a>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default App;

const Separator = ({
  size,
}: {
  size: "small" | "medium" | "large" | "xlarge" | "xxlarge";
}) => {
  switch (size) {
    case "small":
      return <div className="h-small col-span-12"></div>;
    case "medium":
      return <div className="h-medium col-span-12"></div>;
    case "large":
      return <div className="h-large col-span-12"></div>;
    case "xlarge":
      return <div className="h-xlarge col-span-12"></div>;
    case "xxlarge":
      return <div className="h-xxlarge col-span-12"></div>;
    default:
      return <div className="h-small col-span-12"></div>;
  }
};
