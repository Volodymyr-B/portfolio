import Contacts from "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Intro from "./components/intro/Intro";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Intro />
      <Skills />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
};

export default App;
