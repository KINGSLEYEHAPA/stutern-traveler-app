import Header from "./components/Header";
import "./assets/images/355119.jpg";
import Footer from "./components/Footer";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

function App() {
  const appState = useSelector((state) => state.appState);
  console.log(appState);
  return (
    <div className="min-h-screen bg-sky-600  flex-wrap  flex flex-col bg-[url('./assets/images/355119.jpg')] bg-contain ">
      <Header />
      <Outlet />

      <Footer />
    </div>
  );
}

export default App;
