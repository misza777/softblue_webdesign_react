import "./App.css";
import {Container} from "react-bootstrap";
import {Routes, Route}  from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomeScreen from "./screens/HomeScreen";

function App() {

  return (
    <>
      <Header/>
      <main classname="py-2">

      <Container>
        <Routes>
          {/* <Route path="/" element={<HomeScreen/>}/> */}
          {/* <Route path="/" element={<HomeScreen/>}/> */}
          {/* <Route path="/" element={<HomeScreen/>}/> */}
          </Routes>
      </Container>
      </main>
      <Footer/>
    </>
  );
}

export default App;
