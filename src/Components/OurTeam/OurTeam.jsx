// import React from "react";
// import "./OurTeam.css";
// import { FaBolt, FaUserHardHat } from "react-icons/fa";
// import { GiPipeWrench } from "react-icons/gi";
// import { FiArrowRight } from "react-icons/fi";

// import worker1 from "../../assets/worker1.png";
// import worker2 from "../../assets/worker2.png";
// import worker3 from "../../assets/worker3.png";
// import worker4 from "../../assets/worker4.png";
// import worker5 from "../../assets/worker5.png";
// import worker6 from "../../assets/worker6.png";
// import worker7 from "../../assets/worker7.png";
// import worker8 from "../../assets/worker8.png";
// import backgroundPattern from "../../assets/curved.png"; // background blue waves

// const teamMembers = [
//   {
//     name: "Tatenda Karindi",
//     roleIcon: <FaUserHardHat />,
//     description:
//       "Specializes in residential and commercial construction, including roofing, tiling, and renovations.",
//     image: worker1,
//   },
//   {
//     name: "Panashe Tatamba",
//     roleIcon: <GiPipeWrench />,
//     description:
//       "Experienced in pipework, bathroom and kitchen installations, and water system repairs.",
//     image: worker2,
//   },
//   {
//     name: "Wine Musuku",
//     roleIcon: <FaUserHardHat />,
//     description:
//       "Specializes in residential and commercial construction, including roofing, tiling, and renovations.",
//     image: worker3,
//   },
//   {
//     name: "Petter Svotwa",
//     roleIcon: <GiPipeWrench />,
//     description:
//       "Experienced in pipework, bathroom and kitchen installations, and water system repairs.",
//     image: worker4,
//   },
//   {
//     name: "John Chikwara",
//     roleIcon: <FaBolt />,
//     description:
//       "Certified electrician offering wiring, lighting, and solar power installations.",
//     image: worker5,
//   },
//   {
//     name: "Adam Dope",
//     roleIcon: <FaBolt />,
//     description:
//       "Certified electrician offering wiring, lighting, and solar power installations.",
//     image: worker6,
//   },
//   {
//     name: "Petter Svotwa",
//     roleIcon: <FaBolt />,
//     description:
//       "Certified electrician offering wiring, lighting, and solar power installations.",
//     image: worker7,
//   },
//   {
//     name: "Grace Ncube",
//     roleIcon: <GiPipeWrench />,
//     description:
//       "Experienced in pipework, bathroom and kitchen installations, and water system repairs.",
//     image: worker8,
//   },
// ];

// const OurTeam = () => {
//   return (
//     <section className="our-team-section">
//       <h2 className="team-title">Our Team</h2>
//       <div className="team-grid">
//         {teamMembers.map((member, index) => (
//           <div key={index} className="team-card">
//             <img
//               src={backgroundPattern}
//               alt="pattern"
//               className="card-pattern"
//             />
//             <div className="profile-img">
//               <img src={member.image} alt={member.name} />
//             </div>
//             <h3 className="team-name">
//               {member.name} <span className="role-icon">{member.roleIcon}</span>
//             </h3>
//             <p className="team-desc">{member.description}</p>
//             <button className="get-btn">
//               Get in touch <FiArrowRight className="arrow-icon" />
//             </button>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default OurTeam;







import React from "react";
import "./OurTeam.css";
import { FiArrowRight } from "react-icons/fi";

import worker1 from "../../assets/worker1.png";
import worker2 from "../../assets/worker2.png";
import worker3 from "../../assets/worker3.png";
import worker4 from "../../assets/worker4.png";
import worker5 from "../../assets/worker5.png";
import worker6 from "../../assets/worker6.png";
import worker7 from "../../assets/worker7.png";
import worker8 from "../../assets/worker8.png";

import builderIcon from "../../assets/builder-emoji.png";
import plumberIcon from "../../assets/plumbing-icon.png";
import electricianIcon from "../../assets/electric-icon.png";
import backgroundPattern from "../../assets/curved.png";

const teamMembers = [
  {
    name: "Tatenda Karindi",
    roleIcon: builderIcon,
    description:
      "Specializes in residential and commercial construction, including roofing, tiling, and renovations.",
    image: worker1,
  },
  {
    name: "Panashe Tatamba",
    roleIcon: plumberIcon,
    description:
      "Experienced in pipework, bathroom and kitchen installations, and water system repairs.",
    image: worker2,
  },
  {
    name: "Wine Musuku",
    roleIcon: builderIcon,
    description:
      "Specializes in residential and commercial construction, including roofing, tiling, and renovations.",
    image: worker3,
  },
  {
    name: "Petter Svotwa",
    roleIcon: plumberIcon,
    description:
      "Experienced in pipework, bathroom and kitchen installations, and water system repairs.",
    image: worker4,
  },
  {
    name: "John Chikwara",
    roleIcon: electricianIcon,
    description:
      "Certified electrician offering wiring, lighting, and solar power installations.",
    image: worker5,
  },
  {
    name: "Adam Dope",
    roleIcon: electricianIcon,
    description:
      "Certified electrician offering wiring, lighting, and solar power installations.",
    image: worker6,
  },
  {
    name: "Petter Svotwa",
    roleIcon: electricianIcon,
    description:
      "Certified electrician offering wiring, lighting, and solar power installations.",
    image: worker7,
  },
  {
    name: "Grace Ncube",
    roleIcon: plumberIcon,
    description:
      "Experienced in pipework, bathroom and kitchen installations, and water system repairs.",
    image: worker8,
  },
];

const OurTeam = () => {
  return (
    <section className="our-team-section">
      <h2 className="our-team-title">Other <span>Featured Providers</span></h2>
      <div className="our-team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="our-team-card">
            <img
              src={backgroundPattern}
              alt="pattern"
              className="card-pattern"
            />
            <div className="profile-img">
              <img src={member.image} alt={member.name} />
            </div>
            <h3 className="our-team-name">
              {member.name}
              <img
                src={member.roleIcon}
                alt="role icon"
                className="role-icon-img"
              />
            </h3>
            <p className="our-team-desc">{member.description}</p>
            <button className="get-btn">
              Get in touch <FiArrowRight className="arrow-icon" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
