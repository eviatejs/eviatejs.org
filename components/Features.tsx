export default function Features() {
  return (
    <div className="flex flex-col p-12 pt-6">
      <div className="p-4 text-gray-600">
        <div className="flex justify-center items-center flex-col">
          <div className="text-6xl underline text-white decoration-purple-500 font-bold pb-24">
            The next-generation features 🔥
          </div>
          <ul className="grid place-content-center sm:grid-cols-2 gap-8">
            <li className="flex">
              <div className="px-4 text-5xl font-extralight text-purple-300">
                01.
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400">Simple</div>
                <p className="max-w-xs py-2 text-sm text-white">
                  No more req or res. It{"'"}s all ctx (context) and plain
                  objects! Less work for you, we do all the hardlifting. Focus
                  on what actually needs to be done, not on what method needs to
                  be called.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="px-4 text-5xl font-extralight text-purple-300">
                02.
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400">Fast</div>
                <p className="max-w-xs py-2 text-sm text-white">
                  Built from the ground up with performance in mind. Zero,
                  Zilch, Nada dependencies. It{"'"}s 2022, performance and size does matter,
                  still. No extra code, no extra weight. Super super low overhead.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="px-4 text-5xl font-extralight text-purple-300">
                03.
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400">
                  Typescript-first
                </div>
                <p className="max-w-xs py-2 text-sm text-white">
                  Built with type-safety in mind, first-class support. Who loves bugs?
                  Nobody. We don{"'"}t either. We love typescript, and we love shipping cool stuff
                  that you enjoy.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="px-4 text-5xl font-extralight text-purple-300">
                04.
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400">
                  Flexible
                </div>
                <p className="max-w-xs py-2 text-sm text-white">
                  Completely flexible with access to the all events, and data.
                  No more try-catch all around. It{"'"}s just eviate, you and a
                  onError function here.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="px-4 text-5xl font-extralight text-purple-300">
                05.
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400">
                  Middleware
                </div>
                <p className="max-w-xs py-2 text-sm text-white">
                  Powerful middleware support. Route-specific,
                  Route-independent, aswell pre-request and post-request
                  middlewares.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="px-4 text-5xl font-extralight text-purple-300">
                06.
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400">
                  Plugins
                </div>
                <p className="max-w-xs py-2 text-sm text-white">
                  Built with user in mind, the best plugin support to make it
                  super easy to ship anything.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
