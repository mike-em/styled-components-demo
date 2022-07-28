import NavBar from "./components/NavBar";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";
import { LayoutComponent } from "./components/library";

function App() {
  return (
    <LayoutComponent>
      <NavBar />
      <MainSection />
      <Footer />
    </LayoutComponent>
  );
}

export default App;
