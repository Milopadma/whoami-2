import Separator from "./components/separator";

function App() {
  return (
    <div className="flex h-screen flex-col items-center justify-between">
      <div className="pt-medium grid grid-cols-12 bg-white">
        <div className="col-span-3 col-start-3 md:col-span-1 md:col-start-2">
          <h1 className="text-2xl">hello</h1>
        </div>
        <div className="col-span-5 col-start-7 md:col-span-3 md:col-start-7">
          <h1 className="text-2xl leading-6">
            a software engineer from bali interested in impacting lives around
            him
          </h1>
        </div>
        <Separator size="xxlarge" />
        <div className="col-span-3 col-start-2 break-words">
          <h1 className="text-2xl leading-6">www.milopadma.com</h1>
        </div>
        <div className="col-span-3 col-start-7">
          <h1 className="text-2xl">
            <a href="/projects" className="animate-underline">
              <div className="leading-6">view my projects here</div>
            </a>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default App;
