import './App.css';
import {Header, Info, Contactform ,Hero, About, Courses, Features, Testimonals, FooterSection} from './sections/index'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'

function App() {
  return (
    <>
      <Header/>
      <Info/>
      <Hero/>
      <Contactform/>
      <About/>
      <Courses/>
      <Features/>
      <Testimonals/>
      <FooterSection/>
    </>
  );
}

export default App;
