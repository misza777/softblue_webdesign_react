import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./scss/custom.scss";
import "./scss/App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import ServicesScreen from "./screens/ServicesScreen/ServicesScreen";
import ExperienceScreen from "./screens/ExperienceScreen/ExperienceScreen";

function App() {
  return (
    <>
      <Header />
      {/* <main className="clr-main-primary position-relative"> */}
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/experience" element={<ExperienceScreen />} />
            <Route path="/services" element={<ServicesScreen />} />
            {/* <Route path="/writeus" element={<ServicesScreen />} /> */}
          </Routes>
      {/* </main> */}
      <Footer />
    </>
  );
}

export default App;