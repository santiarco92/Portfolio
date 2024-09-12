import NavBar from "./NavBar";
import Header from "./Header";
import Education from "./Education";
import Projects from "./Projects";
import Devprojects from "./Dev-projects";
import Experience from "./Experience";
import Footer from "./Footer";
import "../styles/index.css";

function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <section id="Education">
        <Education />
      </section>
      <section id="Projects">
        <Projects />
      </section>
      <section id="Devprojects">
        <Devprojects />
      </section>
      <section id="Experience">
        <Experience />
      </section>
      <Footer />
    </div>
  );
}

export default App;
