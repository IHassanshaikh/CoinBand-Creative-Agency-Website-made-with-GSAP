import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import ContactForm from './pages/ContactForm';
import ContactForm2 from './components/ContactForm2';
import ContactForm3 from './components/ContactForm3';
import Service from '@pages/Service';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contactform" element={<ContactForm />} />
        <Route path="/offerform" element={<ContactForm2 />} />
        <Route path="/opportunityform" element={<ContactForm3 />} />
      </Routes>
    </Router>
  );
}

export default App;
