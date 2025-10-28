// import React from "react";
// import "./JobPost.css";
// import jobIllustration from "../../assets/job.png";

// const JobPost = () => {
//   return (
//     <section className="jobpost-section">
//       <div className="jobpost-container">
//         {/* LEFT SIDE — FORM */}
//         <div className="jobpost-left">
//           <div className="jobpost-header">
//             <button className="jobpost-tag">Job post</button>
//             <h2>
//               Post a <span>Job Request</span>
//             </h2>
//           </div>

//           <form className="jobpost-form">
//             <div className="form-row">
//               <input type="text" placeholder="Name" />
//               <input type="email" placeholder="Email" />
//             </div>

//             <div className="form-row">
//               <input type="text" placeholder="Phone Number" />
//             </div>

//             <div className="form-row">
//               <input type="text" placeholder="Location" />
//               <input type="number" placeholder="Age" />
//             </div>

//             <div className="form-row">
//               <textarea placeholder="Detailed Description"></textarea>
//             </div>

//             <button type="submit" className="post-btn">
//               Post now
//             </button>
//           </form>
//         </div>

//         {/* RIGHT SIDE — JOB DETAILS CARD */}
//         <div className="jobpost-right">
//           <img
//             src={jobIllustration}
//             alt="job illustration"
//             className="job-illustration"
//           />
//           <div className="job-details">
//             <h3>Job Details</h3>
//             <hr />
//             <p>Department</p>
//             <p>Job Type</p>
//             <p>Offered Salary</p>
//             <p>Portfolio</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default JobPost;













import React from "react";
import "./JobPost.css";
import jobIllustration from "../../assets/job.png";

const JobPost = () => {
  return (
    <section className="jobpost-section">
      <div className="jobpost-container">
        {/* LEFT SIDE — FORM */}
        <div className="jobpost-left">
          <img
            src={jobIllustration}
            alt="illustration"
            className="job-illustration-left"
          />

          <div className="jobpost-header">
            <button className="jobpost-tag">Job post</button>
            <h2>
              Post a <span>Job Request</span>
            </h2>
          </div>

          <form className="jobpost-form">
            <div className="form-row">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
            </div>

            <div className="form-row">
              <input type="text" placeholder="Phone Number" />
            </div>

            <div className="form-row">
              <input type="text" placeholder="Location" />
              <input type="number" placeholder="Age" />
            </div>

            {/* DESCRIPTION + BUTTON SIDE BY SIDE */}
            <div className="form-row description-row">
              <textarea placeholder="Detailed Description"></textarea>
              <button type="submit" className="post-btn">
                Post now
              </button>
            </div>
          </form>
        </div>

        {/* RIGHT SIDE — JOB DETAILS CARD */}
        <div className="jobpost-right">
          <img
            src={jobIllustration}
            alt="illustration"
            className="job-illustration-right"
          />

          <div className="job-details">
            <h3>Job Details</h3>
            <hr />
            <p>Department</p>
            <p>Job Type</p>
            <p>Offered Salary</p>
            <p>Portfolio</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobPost;
