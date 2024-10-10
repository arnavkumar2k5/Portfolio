import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './Pages/Header';
import Home from './Pages/Home';
import Footer from './Pages/Footer';

function App() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!showContent ? (
        <div className="flex justify-center items-center h-screen bg-black">
          <img src="load2.gif" alt="load"/>
        </div>
      ) : (
        <>
          <Header />
          <Home />
        </>
      )}
    </>
  );
}

export default App;
