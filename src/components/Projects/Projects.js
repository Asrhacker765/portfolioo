import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import volmem from "../../Assets/Projects/volmem.png";
import cloud from "../../Assets/Projects/cloud.png";
import dabs from "../../Assets/Projects/dabs.png";
import music from "../../Assets/Projects/music.png";
import ecom from "../../Assets/Projects/ecom.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="blue">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={volmem}
              isBlog={false}
              title="VolMem Analyzer"
              description="
VolMemLyzer is a feature extraction module that utilizes Volatility plugins to analyze memory snapshots. It generates CSV files containing detailed memory features, such as processes and network connections, to facilitate thorough and efficient forensic analysis."              ghLink="https://github.com/Asrhacker765/VolmemAnalyzer.git"/>
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecom}
              isBlog={false}
              title="E-Commerce Website"
              description="
Developed a modern eCommerce web application using React, Node.js, Express, and MongoDB, integrating dynamic product catalogs, secure user authentication, and payment gateway APIs.Designed and managed the back-end architecture with Express and MongoDB, ensuring seamless data flow and implementing secure, scalable features for customer and order management."              ghLink="https://github.com/Asrhacker765/Ecommerce_full_stack.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={music}
              isBlog={false}
              title="Web Music Player"
              description="This project showcases a custom web music player built with HTML, JavaScript, and CSS. It features a clean, modern interface with essential controls for playing, pausing, and skipping tracks, along with a dynamic playlist and volume control. Designed to be responsive and user-friendly, this player ensures an engaging and seamless music experience across all devices."
              ghLink="https://github.com/Asrhacker765/Web_Music_Player.git"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cloud}
              isBlog={false}
              title="E-Commerce Website Junior"
              description="Orchestrated containerized deployments with Kubernetes for scalable infrastructure management. Utilized Docker for containerization, ensuring consistency across development environments. Implemented microservices architecture for modularity and scalability. Resulted in a resilient e-commerce platform, capable of high availability and performance under heavy loads.
"
              ghLink="https://github.com/Asrhacker765/PES2UG21CS108_PES2UG21CS097_PES2UG21CS069_ECOMMERCE_MICROSERVICE.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dabs}
              isBlog={false}
              title="Doctor Appointment Booking System"
              description="This simple web project, built with PHP, HTML, and CSS, facilitates online appointment requests for medical establishments. Patients can browse doctors by specialty, check availability, and book appointments. Doctors can manage their schedules and review appointment requests, while administrators maintain the system and manage doctor profiles."
              ghLink="https://github.com/ASR0228/D_A_B_S.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
