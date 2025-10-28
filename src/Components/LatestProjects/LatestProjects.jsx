import React from "react";
import "./LatestProjects.css";

import project1 from "../assets/project1.jpg"; // replace with real images
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";

function LatestProjects() {
  const projects = [
    {
      id: 1,
      title: "Kitchen Renovation in Borrowdale",
      desc: "A modern kitchen renovation project with high-end finishes.",
      img: project1,
      provider: "John Builders",
    },
    {
      id: 2,
      title: "Plumbing Upgrade in Avondale",
      desc: "Replaced old pipes and upgraded the entire plumbing system.",
      img: project2,
      provider: "Elite Plumbing",
    },
    {
      id: 3,
      title: "Electrical Wiring in Highlands",
      desc: "Full electrical installation for a new home build.",
      img: project3,
      provider: "Smart Electricians",
    },
  ];

  return (
    <section className="latest-projects">
      <h2>Latest Projects</h2>
      <p>See what our professionals have been working on recently</p>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.img} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <span className="provider">By {project.provider}</span>
              <button>View Project</button>
            </div>
          </div>
        ))}
      </div>

      <div className="more-btn">
        <button>Browse More Projects</button>
      </div>
    </section>
  );
}

export default LatestProjects;
