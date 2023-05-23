import "./style.scss"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect } from "react";
import ProjectsUsed from "../../assets/ProjectsUsed";

const Project = () => {
    gsap.registerPlugin(ScrollTrigger);

  return (
    <>
      <ProjectsUsed />
      <ProjectsUsed />
      <ProjectsUsed />
      <ProjectsUsed />
      <ProjectsUsed />
      <ProjectsUsed />    
    </>
  )
}

export default Project