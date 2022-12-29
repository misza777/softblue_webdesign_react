import { Routes, Route } from "react-router-dom";
import "./scss/custom.scss";
import "./scss/App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import ServicesScreen from "./screens/ServicesScreen/ServicesScreen";
import ExperienceScreen from "./screens/ExperienceScreen/ExperienceScreen";
import NotFound from "./screens/NotFound/NotFound";
// ref to the form
import { useRef } from "react";

function App() {
  const formRef = useRef(null);

  return (
    <>
      <Header formRef={formRef} />
      <Routes>
        <Route path="/" element={<HomeScreen ref={formRef} />} />
        <Route path="/services" element={<ServicesScreen ref={formRef} />} />
        <Route
          path="/experience"
          element={<ExperienceScreen ref={formRef} />}
        />
        <Route path="*" element={<NotFound />} />
        <Route path="/notfound" element={<NotFound />} />
        {/* <Route path="softblue_webdesign_react/" element={<HomeScreen />} /> */}
        {/* <Route
          path="softblue_webdesign_react/experience"
          element={<ExperienceScreen />}
        /> */}
        {/* <Route
          path="softblue_webdesign_react/services"
          element={<ServicesScreen />}
        /> */}
        {/* <Route path="/writeus" element={<ServicesScreen />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
