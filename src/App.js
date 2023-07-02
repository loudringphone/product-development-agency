import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import Header from './components/header/Header';
import Routers from './routers/Routers';
import Footer from './components/UI/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <ScrollToTop />
      <main>
          <Routers />
      </main>
      <Footer />
    </div>
  );
}

export default App;

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
      document.documentElement.scrollTo({
      // In general, if you want to scroll to the top of the page, using document.documentElement.scrollTop is the more reliable and widely used approach. However, if you need to scroll to a specific position on the page or use more advanced scrolling behaviors, window.scrollTo or window.scrollBy may be more appropriate.
      top: 0,
      left: 0,
      behavior: "instant",
      });
  }, [pathname])
} 
