import React from "react";
import cybernetics from "../img/cybernetics.jpeg";
import freelance from "../img/freelancer.png";
import TypewriterComponent from "typewriter-effect";
import { useRef,useEffect } from "react";


function Experience() {
  const targetRef1 = useRef(null);
  const targetRef2 = useRef(null);
  const targetRef3 = useRef(null);
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

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '10px',
      threshold: 0,
    };
    const callback = (entries, observer) => {
      entries.forEach(entry => {
        if(targetRef3.current)
        {
          if (entry.isIntersecting) {
            targetRef3.current.classList.add("show");
          } else {
            targetRef3.current.classList.remove("show");
          }
        }
        
      });
    };

    const observer = new IntersectionObserver(callback, options);


    if (targetRef3.current) {
      observer.observe(targetRef3.current);
    }

    return () => {
      if (targetRef3.current) {
        observer.unobserve(targetRef3.current);
        observer.disconnect();
      }
    };
  }, []);
  return (
    <div className="experience container" id="experience">
      <p className="experience__label" ref={targetRef1}>EXPERIENCE</p>
      <div className="experience__job" ref={targetRef2}>
        <div className="experience__job--heading">
          <div>
            <img
              src={cybernetics}
              alt="cybernetics"
              className="experience__job--img"
            />
            <p className="experience__job--label">Co-Teacher</p>
          </div>
          <p className="experience__job--date">May 2024 - Present</p>
        </div>
        <p className="experience__job--text">
          {/* <TypewriterComponent onInit={(typewriter) => {
            typewriter.typeString("I started to work as a co-teacher in Cybernetics Academy since May 2024. Since then, i have gained ton of experience and i got the oppurtunity to share my knowledge with students. We can say that thats the first step i took in my professional carrier.").start()
          }}/>
           */}
           I started to work as a co-teacher in Cybernetics Academy since May 2024. Since then, i have gained ton of experience and i got the oppurtunity to share my knowledge with students. We can say that thats the first step i took in my professional carrier.
        </p>
      </div>
      <div className="experience__job" ref={targetRef3}>
        <div className="experience__job--heading">
          <div>
            <img
              src={freelance}
              alt="freelance"
              className="experience__job--img"
            />
            <p className="experience__job--label">Freelance</p>
          </div>
          <p className="experience__job--date">November 2023 - Present</p>
        </div>
        <p className="experience__job--text">
          Since November 2023, i have started to work as a freelance developer. I got couple of projects that i've completed as a freelance developer. If u wanna check, u cann go right above the projects section and check out my real-world projects.
        </p>
      </div>
    </div>
  );
}

export default Experience;
