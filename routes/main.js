// Create a new router
const express = require("express");
const router = express.Router();

// Home route
router.get("/", (req, res) => res.send("Hello World!"));

// About route
router.get("/about", (req, res) => {
  res.status(200).send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Presiyan Draganov - My Web Page</title>
      <style>
        body {
          font-family: Arial, Helvetica, sans-serif;
          background-color: #f5f7fa;
          color: #333;
          margin: 40px;
        }
        .container {
          background: #fff;
          padding: 30px 40px;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          max-width: 900px;
          margin: auto;
        }
        h1 {
          color: #1e3a8a;
        }
        h2 {
          color: #334155;
          margin-top: 25px;
        }
        h3 {
          color: #1e3a8a;
          margin-top: 15px;
        }
        p, li {
          line-height: 1.6;
        }
        ul {
          list-style: disc;
          margin-left: 20px;
        }
        .project {
          margin-bottom: 20px;
          padding: 15px;
          border-left: 4px solid #1e3a8a;
          background-color: #f9fafb;
          border-radius: 8px;
        }
        .project-title {
          font-weight: bold;
          font-size: 17px;
          color: #1e3a8a;
        }
        footer {
          text-align: center;
          margin-top: 40px;
          color: #777;
          font-size: 14px;
        }
        a {
          color: #1e3a8a;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Presiyan Draganov</h1>
        <h2>Computer Science Student at Goldsmiths, University of London</h2>
        <p><strong>Email:</strong> presiyanpresiyan2005@gmail.com<br>
           <strong>Phone:</strong> 01234 56789</p>

        <h2>Education</h2>
        <p><strong>Goldsmiths, University of London</strong> (2023 – 2026)<br>
        Bachelor of Science in Computer Science<br>
        Key Modules: Computer Architecture, Algorithms & Data Structures, Data Programming for AI, Networks & OS, Software Development & Design, Machine Learning, Dynamic Web Applications, Network and System Security.</p>

        <p><strong>Cornwallis Academy</strong> (2021 – 2023)<br>
        A Level Maths, Chemistry, Biology</p>

        <h2>Skills</h2>
        <ul>
          <li><strong>Programming Languages:</strong> Python, Java, JavaScript, HTML, CSS, SQL</li>
          <li><strong>Tools & Technologies:</strong> React, Node.js, Flask, Git, Docker, Google Cloud Platform, VS Code, PyCharm, IntelliJ, Eclipse</li>
          <li><strong>Certifications:</strong> Cyber Security, GDPR UK Education, Employment Programme, Safeguarding Awareness for Non-School Settings</li>
        </ul>

        <h2>Work Experience</h2>
        <p><strong>Saga Robotics</strong> – Autonomous Robots Operator (May 2024 – Present)</p>
        <ul>
          <li>Configured and calibrated autonomous robotic systems, fine-tuning parameters to increase efficiency by 15%.</li>
          <li>Analysed telemetry and sensor data to identify performance bottlenecks, reducing delays by 12%.</li>
          <li>Integrated AI-based perception models with sensor fusion pipelines (LiDAR, cameras, IMUs), improving detection accuracy by 24%.</li>
          <li>Built and maintained multi-modal sensor data pipelines for diagnostics and awareness.</li>
          <li>Collaborated across teams to integrate autonomy into AI systems, enhancing fleet coordination.</li>
        </ul>

        <p><strong>Holcombe Grammar School, TSAT Trust</strong> – Teaching Internship (June 2025 – July 2025)</p>
        <ul>
          <li>Taught algorithms, Python, and Java to strengthen students' programming foundations.</li>
          <li>Prepared lesson plans, exercises, and interactive coding activities.</li>
          <li>Collaborated with staff to assess student progress and improve teaching strategies.</li>
          <li>Supported lab sessions and mentored students on real-world programming projects.</li>
        </ul>

        <p><strong>Harmsworth Printing</strong> – Loading Assistant, Security and Reception Administration (Sept 2023 – May 2024)</p>
        <ul>
          <li>Managed stock and shipments, ensuring delivery accuracy.</li>
          <li>Followed safety procedures and enforced company policies.</li>
          <li>Organised files and digital documentation systems.</li>
          <li>Identified security vulnerabilities and suggested preventive measures.</li>
          <li>Verified credentials and maintained access control logs.</li>
        </ul>

        <h2>Responsibilities and Achievements</h2>
        <p><strong>Food Redistribution Volunteer, OLIO</strong> (March 2023 – Present)</p>
        <ul>
          <li>Collected unsold food from local retailers and redistributed it to reduce community food waste.</li>
          <li>Rescued and shared over 1000 food items, preventing landfill waste.</li>
          <li>Raised sustainability awareness by engaging with residents and app users.</li>
        </ul>

        <h2>Relevant Projects</h2>

        <div class="project">
          <div class="project-title">Chatbot Application (Python)</div>
          <p>Developed an intelligent chatbot using <strong>Python</strong> and libraries such as <em>NLTK</em> and <em>TensorFlow</em>. 
          The chatbot processes natural language inputs, classifies intents, and provides context-aware responses. 
          Designed a modular structure allowing easy integration with messaging platforms and REST APIs.</p>
        </div>

        <div class="project">
          <div class="project-title">Super Mario-Inspired 2D Platformer</div>
          <p>Created a fully functional 2D game using <strong>JavaScript</strong> and <strong>HTML5 Canvas</strong>. 
          Implemented physics-based mechanics, collision detection, and animated sprites. 
          Players navigate through levels collecting coins and avoiding obstacles — inspired by retro-style game design.</p>
        </div>

        <div class="project">
          <div class="project-title">Interactive Drawing App (JavaScript)</div>
          <p>Built a browser-based drawing application featuring dynamic brush sizes, color pickers, eraser tools, and save/export functionality. 
          Developed with <strong>HTML, CSS, and JavaScript</strong> using the Canvas API for responsive, real-time rendering.</p>
        </div>

        <div class="project">
          <div class="project-title">Networking Layer Simulations (Jupyter Notebook)</div>
          <p>Designed and implemented multiple networking layer projects to demonstrate data transmission concepts and protocol behavior:</p>
          <ul>
            <li><strong>Network Access Layer:</strong> Error detection, framing, and data encapsulation mechanisms.</li>
            <li><strong>Internet Layer:</strong> IP routing, addressing, and fragmentation demonstrations.</li>
            <li><strong>Transport Layer (Parts 1 & 2):</strong> TCP/UDP flow control, connection setup, and congestion management simulations.</li>
            <li><strong>Application Layer in Networks:</strong> Built simple client-server communication models with socket programming.</li>
          </ul>
        </div>

        <div class="project">
          <div class="project-title">Fitness Tracking Website</div>
          <p>Developed a responsive web application using <strong>Flask</strong> (Python), <strong>HTML, CSS, and JavaScript</strong> for fitness goal tracking. 
          Integrated user authentication, progress dashboards, and exercise logging features with a clean and intuitive interface.</p>
        </div>

        <div class="project">
          <div class="project-title">Additional Projects</div>
          <p>Explored a wide range of academic and personal coding projects across <em>AI, web development, and systems programming</em>. 
          Many of these are publicly available on my <a href="https://github.com/presiyan21" target="_blank">GitHub profile</a>.</p>
        </div>

        <footer>
          &copy; 2025 Presiyan Draganov | My Personal Web Page
        </footer>
      </div>
    </body>
    </html>
  `);
});


// Contact route
router.get("/contact", (req, res) =>
  res.send(`
    <h1>Contact Details</h1>
    <p><strong>Phone:</strong> 0123456789</p>
    <p><strong>Email:</strong> pdrag001@campus.goldsmiths.ac.uk</p>
    <p><strong>Student ID:</strong> 33802376</p>
    <p><strong>LinkedIn:</strong> Presiyan Draganov</p>
  `)
);

// Date route
router.get("/date", (req, res) => {
  const now = new Date(); // Get current date/time
  res.send(`<h1>Current Date and Time:</h1><p>${now}</p>`); // Show date/time
});

// Extension Tasks
// Parameterised route
// Example: http://localhost:8000/welcome/Jemima
router.get("/welcome/:name", (req, res) => {
  const userName = req.params.name; // Get the "name" part of the URL
  res.send(`<h1>Welcome ${userName}</h1>`);
});


// Chaining route handlers
router.get(
  "/chain",
  (req, res, next) => {
    console.log("First handler running...");
    next(); // Pass control to the next handler
  },
  (req, res) => {
    res.send("<h1>This is the second handler in the chain</h1>");
  }
);


// Sending an HTML file 
router.get("/file", (req, res) => {
  res.sendFile(path.join(__dirname, "../a.html"));
});


// Export router
module.exports = router;