import Header from "./components/Header";
import HomePage from "./components/HomePage";
import "./assets/images/355119.jpg";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-sky-600  flex-wrap  flex flex-col bg-[url('./assets/images/355119.jpg')] bg-contain ">
      <Header />
      <HomePage />
      <div className="bg-white/30 mb-12 w-96 h-52 items-center gap-12 flex justify-center mx-auto mt-24 rounded-lg">
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
      <Footer />
    </div>
  );
}

export default App;
