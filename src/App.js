import Header from "./components/Header";

function App() {
  return (
    <div className="bg-violet-200 min-h-screen bg-sky-600 snap-y flex-wrap overflow-scroll snap-mandatory flex flex-col ">
      <Header />
      <div className="flex px-6 w-screen">
        <div className="bg-white/30 snap-start backdrop-blur-xl w-72 h-64 items-center flex justify-center mx-auto mt-24 rounded-lg">
          <h1 className="text-3xl text-white">The plain</h1>
        </div>
        <div className="bg-white/30 snap-start backdrop-blur-xl w-72 h-64 items-center flex justify-center mx-auto mt-24 rounded-lg">
          <h1 className="text-3xl text-white">The plain</h1>
        </div>

        <div className="bg-white/30 snap-start backdrop-blur-xl w-72 h-64 items-center flex justify-center mx-auto mt-24 rounded-lg">
          <h1 className="text-3xl text-white">The plain</h1>
        </div>
        <div className="bg-white/30 snap-start backdrop-blur-xl w-72 h-64 items-center flex justify-center mx-auto mt-24 rounded-lg">
          <h1 className="text-3xl text-white">The plain</h1>
        </div>
      </div>
      <div className="bg-white/30 mb-12 snap-start backdrop-blur-xl w-96 h-52 items-center gap-12 flex justify-center mx-auto mt-24 rounded-lg">
        <h1 className="text-sm text-white bg-orange-600 p-1 rounded-md ">
          The plain
        </h1>
        <h1 className="text-sm text-white bg-orange-600 p-1 rounded-md ">
          The plain
        </h1>
        <h1 className="text-sm text-white bg-orange-600 p-1 rounded-md ">
          The plain
        </h1>
      </div>
      <div className="flex flex-col px-6 w-screen gap-8">
        <div className="bg-white/30 snap-start backdrop-blur-xl w-72 h-64 items-center flex justify-center mx-auto mt-24 rounded-lg">
          <h1 className="text-sm text-white">The plain</h1>
        </div>
        <div className="bg-white/30 snap-start backdrop-blur-xl w-72 h-64 items-center flex justify-center mx-auto mt-24 rounded-lg">
          <h1 className="text-sm text-white">The plain</h1>
        </div>

        <div className="bg-white/30 snap-start backdrop-blur-xl w-72 h-64 items-center flex justify-center mx-auto mt-24 rounded-lg">
          <h1 className="text-sm text-white">The plain</h1>
        </div>
        <div className="bg-white/30 snap-start backdrop-blur-xl w-72 h-64 items-center flex justify-center mx-auto mt-24 rounded-lg">
          <h1 className="text-sm text-white">The plain</h1>
        </div>
      </div>
      <div className="bg-white/30 mb-12 snap-start backdrop-blur-xl w-96 h-52 items-center gap-12 flex justify-center mx-auto mt-24 rounded-lg">
        <h1 className="text-sm text-white bg-orange-600 p-1 rounded-md ">
          The plain
        </h1>
        <h1 className="text-sm text-white bg-orange-600 p-1 rounded-md ">
          The plain
        </h1>
        <h1 className="text-sm text-white bg-orange-600 p-1 rounded-md ">
          The plain
        </h1>
      </div>
    </div>
  );
}

export default App;
