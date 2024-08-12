import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Head from './components/head/Head';
import NavBar from './components/NavBar';
import Home from './components/home/Home';
import About from './components/about/About';
import Academic from './components/academic/Academic';
import Admission from './components/admission/Admission';
import Faculty from './components/faculty/Faculty';
import Student from './components/student/Student';
import Gallery from './components/gallery/Gallery';
import Contact from './components/contact/Contact';
import Foot from './components/foot/Foot';

function App() {
  return (
    <div className='App'>
      <Head />
      <NavBar />
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='academics' element={<Academic />} />
        <Route path='admissions' element={<Admission />} />
        <Route path='faculty' element={<Faculty />} />
        <Route path='students' element={<Student />} />
        <Route path='gallery' element={<Gallery />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
      <Foot />
    </div>
  );
}

export default App;
