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
      <Routes>
        {/* <Route path="softblue_webdesign_react/" element={<HomeScreen />} /> */}
        <Route path="/" element={<HomeScreen />} />
        {/* <Route
          path="softblue_webdesign_react/experience"
          element={<ExperienceScreen />}
        /> */}
        <Route path="/experience" element={<ExperienceScreen />} />
        {/* <Route
          path="softblue_webdesign_react/services"
          element={<ServicesScreen />}
        /> */}
        <Route path="/services" element={<ServicesScreen />} />
        {/* <Route path="/writeus" element={<ServicesScreen />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
