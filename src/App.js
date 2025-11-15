import { Routes, Route } from 'react-router-dom';
import Nav              from './components/Nav';
import Hero             from './components/Hero';
import SecondSection    from './components/SecondSection';
import EBookCTA         from './components/EBookCTA';
import LatestArticles   from './components/LatestArticles';
import YoutubeNewsletter from './components/YoutubeNewsletter';
import Footer           from './components/Footer';
import Login            from './pages/Login';
import Signup           from './pages/Signup'; // ← new
import './index.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={
          <>
            <Nav />
            <Hero />
            <SecondSection />
            <EBookCTA />
            <LatestArticles />
            <YoutubeNewsletter />
            <Footer />
          </>
        } />
        {/* <Route path="/login"  element={<Login />} /> */}
        {/* <Route path="/signup" element={<Signup />} /> ← added */}
      </Routes>
    </>
  );
}
export default App;