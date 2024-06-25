import React from "react";
import avatar from "../img/avatar.png";
import html from "../img/html.png";
import css from "../img/css.png";
import javascript from "../img/javascript.png";
import react from "../img/reactjs.png";
import bootstrap from "../img/bootstrap.png";
import tailwind from "../img/tailwind.png";
import git from "../img/git.png";
import github from "../img/github.png";
import sass from "../img/sass.png";
import redux from "../img/redux.png";
import next from "../img/nextjs.png";
import csharp from "../img/csharp.png";
import dotnet from "../img/dotnet.png";
import mysql from "../img/mysql.png";
import mongo from "../img/mongodb.png";

import { useRef } from "react";
import { useEffect } from "react";
const items = document.querySelectorAll(".header__experience--item");
  
function scaleItemsSequentially(items) {
  let currentIndex = 0;

  function scaleNextItem() {
    if (currentIndex > 0) {
      items[currentIndex - 1].classList.remove('scaled');
    }

    if (currentIndex < items.length) {
      items[currentIndex].classList.add('scaled');
      currentIndex++;
      setTimeout(scaleNextItem, 100);  
    }
    if(currentIndex == items.length+1){
      items.forEach((item) => {
        item.classList.remove("scaled");
      })
    }
  }

  scaleNextItem();
}
function Header() {
  const targetRef = useRef(null);
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0,
    };
    const callback = (entries, observer) => {
      entries.forEach(entry => {
        if(targetRef.current)
        {
          if (entry.isIntersecting) {
            scaleItemsSequentially(items)
          }
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);


    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
        observer.disconnect();
      }
    };
  }, []);

  

  return (
    <div className="header section" id="home" >
      <img src={avatar} alt="image" className="header__avatar"/>
      <p className="header__heading section" id="about">
      <span className="header__heading--gradient">Huseyn Murtuzov</span><br />
        Passionate Web Developer
      </p>
      <p className="header__text">
        I am a seasoned full-stack developer. I have been in this sector for almost 2 years, and this little period of time i specialized in both front and back end technologies. I'm still learning while working and building real-world projects. 
      </p>
      <div className="header__buttons">
        <a href="#contact" className="header__btn-getintouch">Get In Touch</a>
        <a href="" download='../img/cv.pdf' className="header__btn-download" >Download CV</a>
      </div>
      <div className="header__experience">
        <p className="header__experience--text" >EXPERIENCE WITH</p>
        <div className="header__experience--wrap" ref={targetRef}>
            <img src={html} alt="" className="header__experience--item" />
            <img src={css} alt="" className="header__experience--item" />
            <img src={sass} alt="" className="header__experience--item" />
            <img src={tailwind} alt="" className="header__experience--item" />
            <img src={bootstrap} alt="" className="header__experience--item" />
            <img src={javascript} alt="" className="header__experience--item" />
            <img src={react} alt="" className="header__experience--item" />
            <img src={redux} alt="" className="header__experience--item" />
            <img src={next} alt="" className="header__experience--item" />
            <img src={git} alt="" className="header__experience--item" />
            <img src={github} alt="" className="header__experience--item" />
            <img src={csharp} alt="" className="header__experience--item" />
            <img src={dotnet} alt="" className="header__experience--item" />
            <img src={mysql} alt="" className="header__experience--item" />
            <img src={mongo} alt="" className="header__experience--item" />
        </div>
      </div>
    </div>
  );
}

export default Header;
