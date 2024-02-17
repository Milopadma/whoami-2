import Button from "./components/button";

function App() {
  return (
    <>
      <div className="flex h-screen flex-col items-center justify-between">
        <div className="grid grid-cols-12 bg-white">
          {/* first part */}
          <>
            <div className="col-span-3 col-start-2 md:col-span-1 md:col-start-2">
              <h1 className="text-2xl">hello</h1>
            </div>
            <div className="col-span-5 col-start-7 md:col-span-3 md:col-start-7">
              <h1 className="text-2xl leading-6">
                a software engineer from bali interested in impacting lives
                around him
              </h1>
            </div>
          </>
        </div>
        <div className="grid w-full grid-cols-12 bg-white pb-24">
          {/* second part */}
          <>
            <div className="col-span-3 col-start-2 row-start-6 break-words md:col-start-2">
              <h1 className="text-2xl leading-6">www.milopadma.com</h1>
            </div>
            <div className="col-span-3 col-start-7 row-start-6">
              <Button
                label="view my projects here"
                type="secondary"
                linkTo="projects"
              ></Button>
            </div>
          </>
        </div>
      </div>
      <div className="grid h-24 grid-cols-12 items-center justify-center bg-white">
        <h1 className="col-span-3 col-start-2">2024</h1>
      </div>
    </>
  );
}

export default App;
