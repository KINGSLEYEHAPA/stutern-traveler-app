import Header from "./components/Header";
import HomePage from "./components/HomePage";
import "./assets/images/355119.jpg";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-sky-600  flex-wrap  flex flex-col bg-[url('./assets/images/355119.jpg')] bg-contain ">
      <Header />
      <HomePage />

      <Footer />
    </div>
  );
}

export default App;
