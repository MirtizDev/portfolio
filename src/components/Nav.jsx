import React, { useEffect } from 'react'
import { useState } from 'react';
import classNames from 'classnames';
function Nav() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      let currentSection = '';
      // console.log(window.pageYOffset)

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 250) {
          currentSection = section.getAttribute('id');
        }
      });


      if(window.innerHeight + window.pageYOffset >= document.documentElement.scrollHeight - 1){
        currentSection = "contact"
      }
      setActiveSection(currentSection);
      
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const classnameHome = `nav__link ${activeSection == "home" ? "active" : ""}`
  const classnameAbout = `nav__link ${activeSection == "about" ? "active" : ""}`
  const classnameProjects = `nav__link ${activeSection == "projects" ? "active" : ""}`
  const classnameContact = `nav__link ${activeSection == "contact" ? "active" : ""}`
  

  return (
    <nav className="nav">
        <ul className="nav__wrap">
            <li className="nav__item"><a href="#home" style={{marginLeft:'1rem'}} className={classnameHome}>Home</a></li>
            <li className="nav__item"><a href="#about" className={classnameAbout}>About</a></li>
            <li className="nav__item"><a href="#projects" className={classnameProjects}>Works</a></li>
            <li className="nav__item"><a href="#contact" style={{marginRight:'1rem'}} className={classnameContact}>Contact</a></li>
        </ul>
    </nav>
  )
}

export default Nav