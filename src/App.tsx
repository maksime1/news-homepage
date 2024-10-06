import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import News from "./components/News";
import { FullMain } from "./components/Style";

function App() {
  return (
    <>
      <FullMain >
        <Header />
        <News />
        <Footer />
      </FullMain>
    </>
  );
}

export default App;
