import React, { useState, useEffect } from 'react';
import About from './components/About';
import Intro from './components/Intro';
import Navigation from './components/Navigation';
import Featured from './components/Featured';
import Footer from './components/Footer';
// import Projects from './components/Projects';
import Resume from './components/Resume';
// import logo from './assets/images/logo3.png';
import './App.css';
import './output.css';
import Portfolio from './components/Portfolio';
import { useTimeoutFn } from 'react-use';
import { Transition } from '@headlessui/react';
// import AOS from 'aos';
// import "aos/dist/aos.css";

function App() {
  const [aboutSelected, setAboutSelected] = useState(true);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  /*  const [,,resetIsShowing] = useTimeoutFn(() => setIsLoading(true), 50) */

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000)
  }, []);

  return (
    <div>
      {isLoading ? (
        /*{ <Transition
          show={isLoading}
          enter="transition-opacity ease-in-out duration-50"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-in-out duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        > }*/
        <Intro></Intro>
        /*  </Transition> */

      ) : (
        <div>
          <Navigation
            aboutSelected={aboutSelected}
            setAboutSelected={setAboutSelected}
            portfolioSelected={portfolioSelected}
            setPortfolioSelected={setPortfolioSelected}
            resumeSelected={resumeSelected}
            setResumeSelected={setResumeSelected}
          ></Navigation>
          <main>
            {aboutSelected ? (
              <About></About>
            ) : (
              <Featured
                className='z-0'>
              </Featured>
            )
            }
          </main>
          <Footer
            className='z-10'
          ></Footer>
        </div>
      )}
    </div>
  );
};

export default App;