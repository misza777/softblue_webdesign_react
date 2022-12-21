import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./scss/custom.scss";
import "./scss/App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomeScreen from "./screens/HomeScreen";
import ServicesScreen from "./screens/ServicesScreen";
import ExperienceScreen from "./screens/ExperienceScreen";

function App() {
  return (
    <>
      <Header />
      <main className="py-4 clr-main-primary">
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/services" element={<ServicesScreen />} />
            <Route path="/comments" element={<ExperienceScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
