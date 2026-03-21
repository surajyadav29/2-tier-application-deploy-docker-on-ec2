import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="card">
        <h1>🚀 Full-Stack App Deployed</h1>
        <h2>on AWS EC2 using Docker</h2>

        <p className="desc">
          This application is containerized using Docker and deployed on AWS EC2.
          It demonstrates frontend-backend communication and cloud deployment.
        </p>

        <div className="tags">
          <span>React</span>
          <span>Node.js</span>
          <span>Docker</span>
          <span>AWS EC2</span>
        </div>
      </div>
    </div>
  );
}

export default App;