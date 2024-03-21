import * as React from "react";

function Portfolio() {
  return (
    <div className="mx-auto flex w-full flex-col bg-white px-4 py-20 text-2xl tracking-tighter text-neutral-800">
      <div className="flex w-auto justify-between gap-5 self-stretch whitespace-nowrap">
        <div>projects</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c9ee0f7d2ed184709ca3ade9cc59782f8d25ff939d7d037f7787cc16328dfd9?"
          className="aspect-square w-7 shrink-0"
        />
      </div>
      <div className="mt-12 flex max-w-[500px] flex-col rounded-2xl bg-zinc-50 pb-16 drop-shadow-xl">
        <img
          loading="lazy"
          srcSet="..."
          className="aspect-[1.72] w-full max-w-[500px]"
        />
        <div className="mt-8 flex flex-col px-16">
          <div className="font-bold">asa wood web</div>
          <div className="mt-2.5 text-base tracking-tighter">website</div>
          <div className="mt-4">
            a place for all information regarding the best wood company in
            indonesia
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
