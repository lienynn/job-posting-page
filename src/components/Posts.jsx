import React from "react";

const Posts = ({ 
  featured, 
  companyName, 
  newPost, 
  jobTitle, 
  dayOfPost, 
  contract, 
  region, 
  showLine, 
  skills, 
  onClick 
}) => {
  return (
    <div className={`post-box ${featured ? "featured-border" : ""}`}>
      <div className="content-frame">
        <div className="text-frame">
          <h4 className="text company-name">
            {companyName} 
            {newPost && <span className="new-tag">new!</span>} 
            {featured && <span className="featured-tag">featured</span>}
          </h4>
          <h4 className="text job-title">{jobTitle}</h4>
          <p className="text post-description">
            <span>{dayOfPost}</span>. <span>{contract}</span>. <span>{region}</span>
          </p>
        </div>
        {showLine && <hr />}
        <div className="skill-frame">
          <ul className="skill-list">
            {skills.map((skill, i) => (
              <div key={i} onClick={onClick} className="skills">{skill}</div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Posts;

