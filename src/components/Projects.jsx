import React from "react";
import academystudents from "../img/academystudents.png";
import redstore from "../img/redstore.png";
import viewicon from "../img/viewicon.png";
import { useRef,useEffect } from "react";

function Projects() {
  const targetRef1 = useRef(null);
  const targetRef2 = useRef(null);
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '10px',
      threshold: 0,
    };
    const callback = (entries, observer) => {
      entries.forEach(entry => {
        if(targetRef1.current)
        {
          if (entry.isIntersecting) {
            targetRef1.current.classList.add("show");
          } else {
            targetRef1.current.classList.remove("show");
          }
        }
        
      });
    };

    const observer = new IntersectionObserver(callback, options);


    if (targetRef1.current) {
      observer.observe(targetRef1.current);
    }

    return () => {
      if (targetRef1.current) {
        observer.unobserve(targetRef1.current);
        observer.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '10px',
      threshold: 0,
    };
    const callback = (entries, observer) => {
      entries.forEach(entry => {
        if(targetRef2.current)
        {
          if (entry.isIntersecting) {
            targetRef2.current.classList.add("show");
          } else {
            targetRef2.current.classList.remove("show");
          }
        }
        
      });
    };

    const observer = new IntersectionObserver(callback, options);


    if (targetRef2.current) {
      observer.observe(targetRef2.current);
    }

    return () => {
      if (targetRef2.current) {
        observer.unobserve(targetRef2.current);
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div className="projects section" id="projects">
      <p className="projects__label" ref={targetRef1}>PROJECTS</p>
      <div className="projects__wrap" ref={targetRef2}>
        <a href="https://www.academystudents.com.az/" target="_blank" className="projects__project">
          <img
            src={academystudents}
            alt="academystudents"
            className="projects__project--img"
          />
          <div className="projects__project--bottom">
            <div>
                <p className="projects__project--click">Click Here to Visit</p>
              <p className="projects__project--label">
                Academy Students Website
              </p>
            </div>
            <img src={viewicon} alt="viewicon" />
          </div>
        </a>
        <a href="https://mirtizstore.vercel.app/" target="_blank" className="projects__project">
          <img
            src={redstore}
            alt="redstore"
            className="projects__project--img"
          />
          <div className="projects__project--bottom">
            <div>
                <p className="projects__project--click">Click Here to Visit</p>
              <p className="projects__project--label">
                Red Store Website
              </p>
            </div>
            <img src={viewicon} alt="viewicon" />
          </div>
        </a>
      </div>
    </div>
  );
}

export default Projects;
